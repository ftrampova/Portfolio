import React from 'react';
import blenderImg from './images/blender.png';
import figmaImg from './images/figma.png';
import javascriptImg from './images/js.png';
import cssImg from './images/css.png';
import reactImg from './images/react.png';
import phpImg from './images/php.png';
import mysqlImg from './images/mysql.png';
import canvaImg from './images/canva.png';
import woocommerceImg from './images/woocommerce.png';
import CapcutImg from './images/capcut.png';
import WordpressImg from './images/wordpress.png';


const AboutSection = () => {
  const education = [
    { label: "Софийски университет (2019–2022)" },
    { label: "НБУ (2022–2024)" }
  ];

  const experience = [
    {
      period: "2021 - 2023",
      company: "Jeff de Bruges",
      position: "Продавач-консултант"
    },
    {
      period: "2023 - до момента",
      company: "ToolsBox",
      position: "Мениджър Уебсайт"
    }
  ];

const skills = [
  { name: "Blender", img: blenderImg },
  { name: "Figma", img: figmaImg },
  { name: "Javascript", img: javascriptImg },
  { name: "CSS", img: cssImg },
  { name: "React", img: reactImg },
  { name: "PHP", img: phpImg },
  { name: "MySQL", img: mysqlImg },
  { name: "Canva", img: canvaImg },
  { name: "Woocommerce", img: woocommerceImg },
  { name: "Capcut", img: CapcutImg },
  { name: "Wordpress", img: WordpressImg }
];


  return (
    <section className="bg-orange-500 py-12 px-4">
      {/* Wrapper - по-слаба сянка от всички страни */}
      <div className="bg-slate-900 text-white mx-auto p-8 shadow-[0_0_20px_rgba(0,0,0,0.5)] ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* За мен */}
          <div className="text-left px-6">
            <h2 className="text-3xl font-bold text-orange-400 mb-8 px-5">За мен</h2>
            <div className="text-ml leading-relaxed max-w-2xl mx-auto">
              <p className="mb-6">
                Здравей! Аз съм Информатик с опит в уеб поддръжка, UI прототипиране и създаване на дигитално съдържание. </p>
              <p className="mb-6">
                В момента работя като уебсайт мениджър, където управлявам пълния жизнен цикъл на дигиталните продукти - от разработка и дизайн до маркетинг и оптимизация. Владея HTML, CSS, JavaScript, PHP и MySQL, като съм реализирала проекти включващи болнична система и уебсайтове за резервиран на места в заведения, както и намиране на детегледачка. Имам опит с React и активно използвам Figma за създаване на UI/UX дизайни и прототипи на мобилни приложения.
Ежедневно работя с WooCommerce, където оптимизирам продуктови данни, създавам промоционални кампании и подобрявам SEO представянето за постигане на топ позиции в търсачките. Създавам съдържание за социалните мрежи и рекламни материали, използвайки Canva и други дизайн инструменти.
              </p>
              <p>
                Това, което ме отличава, е естественото ми любопитство към решаването на проблеми - дори когато попадна на предизвикателство извън основната ми област, намирам удоволствие в анализирането и намирането на иновативни решения. Този подход ми е помогнал да придобия разностранен опит и да развия критично мислене.
              </p>
              <p>
                Имам страст към фотографията и ръчното изработване на креативни проекти, а интересите ми са към здравеопазване, готвене и пътувания. 
              </p>
            </div>
          </div>

          {/* Образование и Трудов Опит */}
          <div className="text-left px-4 lg:px-0">
            {/* Образование */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-orange-400 mb-10">Образование</h3>
              <div className="flex flex-col gap-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-orange-500/30 rounded-2xl p-6 shadow-sm shadow-black/20 cursor-pointer transition-all duration-300 hover:bg-orange-500/60"
                  >
                    <p className="text-lg font-medium">{edu.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Трудов Опит */}
            <div>
              <h3 className="text-3xl font-bold text-orange-400 mb-10">Трудов oпит</h3>
              <div className="flex flex-col gap-4">
                {experience.map((job, index) => (
                  <div
                    key={index}
                    className="bg-orange-500/30 rounded-2xl p-4 shadow-sm shadow-black/20 flex items-start gap-4 transition-all duration-300 hover:bg-orange-500/60"
                  >
                    <div className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full text-xl mt-1">
                      💼
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold">{job.period}</p>
                      <p>{job.position}</p>
                      <p className="text-sm text-white/80">{job.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Умения */}
        <div className="mt-14">
          <h3 className="text-4xl font-bold text-orange-400 mb-11 text-center">Умения</h3>

<div className="relative px-8 overflow-x-hidden py-8">

            <div
              className="flex gap-8 items-center will-change-transform"
              style={{ width: 'max-content' }}
            >
              <div className="skill-track flex gap-16 items-center">
                {[...skills, ...skills].map((skill, index) => (
                  <div
                    key={index}
                    className="w-32 h-32 bg-slate-800/95 flex justify-center items-center flex-shrink-0 rounded-2xl transition-transform duration-300 hover:scale-110 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    title={skill.name}
                  >
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="w-20 h-20 object-contain select-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .skill-track {
          animation: slide 24s linear infinite;
        }
        .skill-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
