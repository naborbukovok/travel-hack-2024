#FROM python:3.11-slim as python-base
#
#    # python
#ENV PYTHONUNBUFFERED=1 \
#    # prevents python creating .pyc files
#    PYTHONDONTWRITEBYTECODE=1 \
#    \
#    # pip
#    PIP_NO_CACHE_DIR=off \
#    PIP_DISABLE_PIP_VERSION_CHECK=on \
#    PIP_DEFAULT_TIMEOUT=100 \
#    \
#    # poetry
#    # https://python-poetry.org/docs/configuration/#using-environment-variables
#    POETRY_VERSION=1.0.3 \
#    # make poetry install to this location
#    POETRY_HOME="/opt/poetry" \
#    # make poetry create the virtual environment in the project's root
#    # it gets named `.venv`
#    POETRY_VIRTUALENVS_IN_PROJECT=true \
#    # do not ask any interactive question
#    POETRY_NO_INTERACTION=1 \
#    \
#    # paths
#    # this is where our requirements + virtual environment will live
#    PYSETUP_PATH="/opt/pysetup" \
#    VENV_PATH="/opt/pysetup/.venv"
#
#
## prepend poetry and venv to path
#ENV PATH="$POETRY_HOME/bin:$VENV_PATH/bin:$PATH"
#
#
## `builder-base` stage is used to build deps + create our virtual environment
#FROM python-base as builder-base
#RUN apt-get update \
#    && apt-get install --no-install-recommends -y \
#        # deps for installing poetry
#        curl \
#        # deps for building python deps
#        build-essential
#
## install poetry - respects $POETRY_VERSION & $POETRY_HOME
#RUN curl -sSL https://raw.githubusercontent.com/sdispater/poetry/master/get-poetry.py | python
#
## copy project requirement files here to ensure they will be cached.
#WORKDIR $PYSETUP_PATH
#COPY poetry.lock pyproject.toml ./
#
## install runtime deps - uses $POETRY_VIRTUALENVS_IN_PROJECT internally
#RUN poetry install --no-dev
#
#
## `development` image is used during development / testing
#FROM python-base as development
#WORKDIR $PYSETUP_PATH
#
## copy in our built poetry + venv
#COPY --from=builder-base $POETRY_HOME $POETRY_HOME
#COPY --from=builder-base $PYSETUP_PATH $PYSETUP_PATH
#
## quicker install as runtime deps are already installed
#RUN poetry install
#
## will become mountpoint of our code
#WORKDIR /app
#
#COPY backend ./
#
#EXPOSE 8000
#CMD ["poetry", "run", "python", "-m", "backend"]

FROM python:3.11.8 as python-base

# https://python-poetry.org/docs#ci-recommendations
ENV POETRY_VERSION=1.8.2
ENV POETRY_HOME=/opt/poetry
ENV POETRY_VENV=/opt/poetry-venv

# Tell Poetry where to place its cache and virtual environment
ENV POETRY_CACHE_DIR=/opt/.cache

# Create stage for Poetry installation
FROM python-base as poetry-base

# Creating a virtual environment just for poetry and install it with pip
RUN python3 -m venv $POETRY_VENV \
	&& $POETRY_VENV/bin/pip install -U pip setuptools \
	&& $POETRY_VENV/bin/pip install poetry==${POETRY_VERSION}

# Create a new stage from the base python image
FROM python-base as app

# Copy Poetry to app image
COPY --from=poetry-base ${POETRY_VENV} ${POETRY_VENV}

# Add Poetry to PATH
ENV PATH="${PATH}:${POETRY_VENV}/bin"

WORKDIR /app

# Copy Dependencies
COPY poetry.lock pyproject.toml ./

# Install Dependencies
RUN poetry install --no-interaction --no-cache

# Copy Application
COPY ./backend ./backend

# Run Application
EXPOSE 4000
CMD ["poetry", "run", "python", "-m", "backend"]
