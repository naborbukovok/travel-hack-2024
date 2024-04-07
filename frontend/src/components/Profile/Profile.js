import "./Profile.css";

function ProfileSection() {
  return (
    <div className="flex flex-col text-center max-md:mt-6 max-sm:hidden">
      <div className="flex gap-5 whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d31432d84856b22dbf7a0ce62ac9eb6b783923539765a3b5cb7db68714ea839?apiKey=dee9bd44158b4a3495560a670601b38e&"
          className="shrink-0 aspect-square w-[70px]"
          alt="Profile"
        />
        <div className="flex flex-col px-5 my-auto">
          <div className="text-xl leading-6 text-black">Александр</div>
          <div className="text-xs leading-6 text-stone-400">
            sashadobr@mail.ru
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileMenu({ items }) {
  return (
    <div className="flex flex-col mt-10">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col justify-center py-3 text-base leading-6 text-black rounded-xl ${
            item.active ? "w-full bg-gray-200" : "mt-4"
          }`}
        >
          <div className="flex gap-2 px-3 max-md:pr-5">
            <img
              loading="lazy"
              src={item.icon}
              className="shrink-0 w-6 aspect-square"
              alt={item.label}
            />
            <div className="justify-center px-0.5 py-1.5">{item.label}</div>
            {item.bonus && (
              <div className="flex gap-0 justify-center py-1 pr-1 text-xs font-medium leading-4 bg-stone-900 bg-opacity-10 rounded-[30px] text-stone-900">
                <div className="flex-1">{item.bonus}</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c90f8b22d09aec1b65dc14a60574a9e71a0ba3b9bc17414869f9469861284a7a?apiKey=dee9bd44158b4a3495560a670601b38e&"
                  className="shrink-0 w-4 aspect-square"
                  alt="Bonus"
                />
              </div>
            )}
            {item.questions && (
              <div className="flex flex-col justify-center text-xs font-medium leading-4 whitespace-nowrap text-stone-900">
                <div className="justify-center items-center px-1 w-6 h-6 bg-yellow-400 rounded-[30px]">
                  {item.questions}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function VisitedRegions() {
  return (
    <div className="flex flex-col justify-center text-stone-900 max-md:max-w-full">
      <div className="flex flex-col max-md:max-w-full">
        <div className="flex gap-0 justify-between px-5 max-md:flex-wrap">
          <h1 className="flex-1 text-5xl leading-10 max-md:max-w-full">
            Вы посетили 15% регионов России
          </h1>
          <div className="flex flex-col justify-center self-start mt-4 font-medium">
            <p className="text-base leading-6">
              Посетите еще 5 регионов для скидки 3%
            </p>
            <div className="flex gap-2 mt-4 text-sm leading-5 text-center">
              <button className="flex gap-2 justify-center px-3 py-2 bg-yellow-400 rounded-lg">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9b12353d7544a696b989641f57ac4aaa346ec208e8a2e7d55c24c2a148ab4df?apiKey=dee9bd44158b4a3495560a670601b38e&"
                  className="shrink-0 w-5 aspect-square"
                  alt="Share"
                />
                <span>Поделиться картой</span>
              </button>
              <button className="flex gap-2 justify-center px-3 py-2 rounded-lg border border-solid border-zinc-300">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9b12353d7544a696b989641f57ac4aaa346ec208e8a2e7d55c24c2a148ab4df?apiKey=dee9bd44158b4a3495560a670601b38e&"
                  className="shrink-0 w-5 aspect-square"
                  alt="Save"
                />
                <span>Сохранить карту</span>
              </button>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/33ad0b61e42e0fb1989bda0cc26f7b0db6061dce4e93e9c9e4121a63218bd4f5?apiKey=dee9bd44158b4a3495560a670601b38e&"
          className="mt-6 w-full aspect-[2.04] max-md:max-w-full"
          alt="Map"
        />
      </div>
    </div>
  );
}

function DiscountLevels({ levels }) {
  return (
    <div className="flex gap-2 mt-10 max-md:flex-wrap max-md:max-w-full">
      {levels.map((level, index) => (
        <div key={index} className="flex flex-col">
          <div className="justify-center self-end px-2 py-1.5 text-sm font-medium leading-5 whitespace-nowrap bg-yellow-400 rounded-lg text-stone-900">
            {level.percent}%
          </div>
          <div className="flex flex-col justify-center mt-2 fill-gray-200">
            <div
              className="shrink-0 h-2 bg-yellow-400 rounded-lg"
              style={{ width: `${level.percent}%` }}
            />
          </div>
          <div
            className={`flex gap-5 justify-between mt-2 text-base leading-6 ${
              level.active ? "text-black" : "text-stone-300"
            }`}
          >
            {level.label && <div>{level.label}</div>}
            <div>{level.discount}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
const achievements = [
  {
    icon: "🚞",
    title: "Чух-чух-чух... Ту-ту!",
    description:
      "Рельсы-рельсы, шпалы шпалы... Берите туры с билетами на поезд!",
  },
  {
    icon: "👩‍❤️‍👨",
    title: "Романтик",
    description:
      "Раньше жены за декабристами в Сибирь, а теперь только в Питер",
  },
  {
    icon: "💎",
    title: "Якутский алмазик",
    description: "Лучшие друзья девушек – это брилли... якуты!",
  },
  {
    icon: "🌏",
    title: "На краю земли",
    description:
      "Так устал от всего, что готов сбежать на край света? Мыс Дежнёва: 43°50′49″ с. ш. 146°54′52″ в. д.",
  },
  {
    icon: "📁",
    title: "На деловом",
    description:
      "Из командировки в командировку, из командировки в командировку… А отпуск когда?",
  },
  {
    icon: "💸",
    title: "Сэкономили!",
    description:
      "Наши скидки и акции, оплата бонусами и, кажется, копейка бережет каждый твой рубль!",
  },
  {
    icon: "🍪",
    title: "Тульский пряник",
    description:
      "Приехал в Тулу со своим самоваром? Держи пока пряник, но помни и о кнуте…",
  },
  {
    icon: "⛰",
    title: "Дела в гору",
    description:
      "Если ты так любишь горы, что готов назвать сына Кавказ или Алтай, забирай ачивку!",
  },
  {
    icon: "🪖",
    title: "Пограничник",
    description:
      "Подозрительно часто отдыхаешь у границы, неужто сбежать собрался?",
  },
];

const AchievementCard = ({ icon, title, description }) => (
  <div className="achievement-card">
    <div className="achievement-card-content">
      <div className="achievement-card-header">
        <div className="achievement-card-icon">{icon}</div>
        <div className="achievement-card-title">{title}</div>
      </div>
      <div className="achievement-card-description">{description}</div>
    </div>
    <div className="achievement-card-button">
      <button className="trip-button">Подобрать поездку</button>
    </div>
  </div>
);

const PaginationButton = ({ children, active }) => (
  <div
    className={`pagination-button ${
      active ? "pagination-button-active" : "pagination-button-inactive"
    }`}
  >
    {children}
  </div>
);

function Profile() {
  const profileMenuItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/da8dea1763fd004aaaad5f01bb641768c32546f578c02326a0f7b5067968bbd5?apiKey=dee9bd44158b4a3495560a670601b38e&",
      label: "Профиль",
      active: true,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e31fca700e031bc3b1f13f638c08df20bd2afbdada73d46aa4979aa702a3a96a?apiKey=dee9bd44158b4a3495560a670601b38e&",
      label: "Личная информация",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e4405ea54b96c0515b8b3f3e13844ebfbff76371b62d5714b58e28fe4dddaa6?apiKey=dee9bd44158b4a3495560a670601b38e&",
      label: "Билеты и бронирования",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e84d87b706920e0d045f73f2f6982aa5619a4994b5aab446ed66fa7eb246759?apiKey=dee9bd44158b4a3495560a670601b38e&",
      label: "История поездок",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/78aae9a2cdfa61c7239b93285c25bbc8b2d20c3eeeb1f626323347b13c4d4934?apiKey=dee9bd44158b4a3495560a670601b38e&",
      label: "Рейтинг пользователей",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b1df8d11f7852154b5ff542e04872dbd13f819f19123711e0dd5e9d74f592a6?apiKey=dee9bd44158b4a3495560a670601b38e&",
      label: "Бонусы",
      bonus: "500",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef7011facdad99ebd158a30c5746dccab981818d979c9981c6a2f066682004e1?apiKey=dee9bd44158b4a3495560a670601b38e&",
      label: "Вопросы и ответы",
      questions: "5",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8fef41c4274560747582676005f80818549b87ec66ee249c6387f15acfc95846?apiKey=dee9bd44158b4a3495560a670601b38e&",
      label: "Выйти из профиля",
    },
  ];

  const discountLevels = [
    {
      percent: 25,
      discount: "- 3%",
      active: true,
    },
    {
      percent: 50,
      discount: "- 5%",
      active: true,
    },
    {
      percent: 75,
      discount: "- 7%",
      active: true,
    },
    {
      percent: 100,
      discount: "- 10%",
      active: false,
    },
  ];

  const tripCards = [
    {
      icon: "🚞",
      title: "Чух-чух-чух... Ту-ту!",
      description:
        "Рельсы-рельсы, шпалы шпалы... Берите туры с билетами на поезд!",
    },
    {
      icon: "👩‍❤️‍👨",
      title: "Романтик",
      description:
        "Раньше жены за декабристами в Сибирь, а теперь только в Питер",
    },
    {
      icon: "💎",
      title: "Якутский алмазик",
      description: "Лучшие друзья девушек – это брилли... якуты!",
    },
    {
      icon: "🌏",
      title: "На краю земли",
      description:
        "Так устал от всего, что готов сбежать на край света? Мыс Дежнёва: 43°50′49″ с. ш. 146°54′52″ в. д.",
    },
    {
      icon: "📁",
      title: "На деловом",
      description:
        "Из командировки в командировку, из командировки в командировку… А отпуск когда?",
    },
    {
      icon: "💸",
      title: "Сэкономили!",
      description:
        "Наши скидки и акции, оплата бонусами и, кажется, копейка бережет каждый твой рубль!",
    },
    {
      icon: "🍪",
      title: "Тульский пряник",
      description:
        "Приехал в Тулу со своим самоваром? Держи пока пряник, но помни и о кнуте…",
    },
    {
      icon: "⛰",
      title: "Дела в гору",
      description:
        "Если ты так любишь горы, что готов назвать сына Кавказ или Алтай, забирай ачивку!",
    },
    {
      icon: "🪖",
      title: "Пограничник",
      description:
        "Подозрительно часто отдыхаешь у границы, неужто сбежать собрался?",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center w-full max-md:max-w-full">
        <div className="flex flex-col self-stretch w-full max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full" />
        </div>
        <div className="flex flex-col justify-center items-start max-w-full w-[1224px] max-md:pr-5 max-sm:hidden">
          <div className="shrink-0 w-px h-6 bg-white" />
        </div>
        <div className="flex flex-col justify-center items-start max-w-full w-[1224px] max-md:pr-5 max-sm:hidden">
          <div className="shrink-0 w-px h-6 bg-white" />
        </div>
      </div>
      <div className="self-center w-full max-w-[1227px] max-md:max-w-full max-sm:hidden">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <aside className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
            <ProfileSection />
            <ProfileMenu items={profileMenuItems} />
          </aside>
          <main className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-6 max-md:max-w-full">
              <VisitedRegions />
              <section className="flex flex-col px-5 mt-16 max-md:mt-10 max-md:max-w-full">
                <h2 className="text-3xl leading-9 text-black max-md:max-w-full">
                  Получайте скидку за открытие новых территорий
                </h2>
                <DiscountLevels levels={discountLevels} />
              </section>
            </div>
            <div className="my-component">
              <h2 className="my-component-title">
                Больше достижений → выше место в рейтинге → меньше платить!
              </h2>
              <div className="my-component-content">
                <div className="achievement-cards">
                  {achievements.map((achievement, index) => (
                    <AchievementCard key={index} {...achievement} />
                  ))}
                </div>
                <div className="my-component-footer">
                  <div className="pagination-buttons">
                    <PaginationButton active>1</PaginationButton>
                    <PaginationButton>2</PaginationButton>
                    <PaginationButton>3</PaginationButton>
                    <PaginationButton>4</PaginationButton>
                    <PaginationButton>5</PaginationButton>
                    <PaginationButton>6</PaginationButton>
                    <PaginationButton>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e185683334b2169f6c03e2fa49342978d94ead678f11f5c0c615db07946e9898?apiKey=dee9bd44158b4a3495560a670601b38e&"
                        alt="Pagination arrow"
                        className="pagination-arrow"
                      />
                    </PaginationButton>
                  </div>
                  <button className="show-more-button">Показать ешё</button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center mt-32 max-md:mt-10 max-md:max-w-full" />
          </main>
        </div>

        <section className="pl-8 bg-pink-600 rounded-3xl max-w-[913px] max-md:pl-5 lotery-section">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 lotery">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex z-10 flex-col self-stretch my-auto text-white max-md:mt-4 max-md:max-w-full">
                <h2 className="justify-center py-0.5 text-5xl leading-10 max-md:max-w-full lotery-text white-text">
                  Скидка 10% на заказ от 5000₽
                </h2>
<a
                  href="#"
                  className="flex gap-2 justify-center self-start px-4 py-1.5 mt-2.5 text-base font-medium leading-6 text-center rounded-xl button-outline-white no-underline"
                >
                  <span>В каталог туров</span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/61716d2191616f97aaff777a3b84b32908f024a587b8cc8db35806d67fd4f455?apiKey=dee9bd44158b4a3495560a670601b38e&"
                    alt="Arrow icon"
                    className="shrink-0 w-6 aspect-square"
                  />
                </a>
                
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f49c1e9db7b00e37feb8a09bda5a32514f23898127e706539f4627c91189eca7?apiKey=dee9bd44158b4a3495560a670601b38e&"
                alt="Promotional image"
                className="grow w-full aspect-[2.5] max-md:max-w-full"
              />
            </div>
          </div>
        </section>

                    

      </div>
    </div>
  );
}

export default Profile;
