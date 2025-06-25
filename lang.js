const translations = {
    ru: {
        name: 'Fenter',
        subtitle: 'Unity-разработчик, Blazor & React веб-приложения',
        aboutTitle: 'Обо мне',
        aboutText: 'Привет! Я Кирилл — разработчик игр на Unity и веб-приложений на Blazor и React. Люблю создавать яркие, современные и удобные продукты. Открыт к новым проектам и сотрудничеству!<br>Работаю с графикой и пиксельной анимацией.',
        skills: [
            '<span class="skill-badge"><i class="bi bi-unity"></i> Unity</span>',
            '<span class="skill-badge"><i class="bi bi-code-slash"></i> C#</span>',
            '<span class="skill-badge"><img src="photo/react-svgrepo-com.svg" alt="React" style="width:20px;height:20px;vertical-align:middle;filter:invert(41%) sepia(97%) saturate(749%) hue-rotate(235deg) brightness(97%) contrast(92%);margin-right:6px;">React</span>',
            '<span class="skill-badge"><i class="bi bi-database"></i> PostgreSQL</span>',
            '<span class="skill-badge"><i class="bi bi-window"></i> Blazor</span>',
            '<span class="skill-badge"><img src="photo/aseprite-svgrepo-com.svg" alt="Aseprite" style="width:20px;height:20px;vertical-align:middle;margin-right:6px;filter:invert(41%) sepia(97%) saturate(749%) hue-rotate(235deg) brightness(97%) contrast(92%);">Aseprite</span>',
            '<span class="skill-badge"><img src="photo/adobe-illustrator-svgrepo-com.svg" alt="Illustrator" style="width:20px;height:20px;vertical-align:middle;margin-right:6px;filter:invert(41%) sepia(97%) saturate(749%) hue-rotate(235deg) brightness(97%) contrast(92%);">Illustrator</span>'
        ],
        projectsTitle: 'Мои проекты',
        justTitle: 'Just Forward',
        justDesc: '3D-рогалик с мультяшной графикой, где основной задачей игрока является движение вперёд через различные локации с сражением против врагов.<br>Проект написан на Unity C#.',
        kvettkaTitle: 'Kvettka',
        kvettkaDesc: 'Редактор цветовых палитр для дизайнеров, художников и разработчиков.<br>Использован Blazor и PostgreSQL.',
        githubTitle: 'GitHub статистика',
        githubContrib: 'Коммиты за последний год',
        footer: '&copy; 2025 Все права защищены.'
    },
    en: {
        name: 'Fenter',
        subtitle: 'Unity Developer, Blazor & React Web Apps',
        aboutTitle: 'About Me',
        aboutText: "Hi! I'm Kirill — a developer of Unity games and web apps with Blazor and React. I love creating bright, modern and user-friendly products. Open to new projects and collaborations!<br>I work with graphics and pixel animation.",
        skills: [
            '<span class="skill-badge"><i class="bi bi-unity"></i> Unity</span>',
            '<span class="skill-badge"><i class="bi bi-code-slash"></i> C#</span>',
            '<span class="skill-badge"><img src="photo/react-svgrepo-com.svg" alt="React" style="width:20px;height:20px;vertical-align:middle;filter:invert(41%) sepia(97%) saturate(749%) hue-rotate(235deg) brightness(97%) contrast(92%);margin-right:6px;">React</span>',
            '<span class="skill-badge"><i class="bi bi-database"></i> PostgreSQL</span>',
            '<span class="skill-badge"><i class="bi bi-window"></i> Blazor</span>',
            '<span class="skill-badge"><img src="photo/aseprite-svgrepo-com.svg" alt="Aseprite" style="width:20px;height:20px;vertical-align:middle;margin-right:6px;filter:invert(41%) sepia(97%) saturate(749%) hue-rotate(235deg) brightness(97%) contrast(92%);">Aseprite</span>',
            '<span class="skill-badge"><img src="photo/adobe-illustrator-svgrepo-com.svg" alt="Illustrator" style="width:20px;height:20px;vertical-align:middle;margin-right:6px;filter:invert(41%) sepia(97%) saturate(749%) hue-rotate(235deg) brightness(97%) contrast(92%);">Illustrator</span>'
        ],
        projectsTitle: 'My Projects',
        justTitle: 'Just Forward',
        justDesc: 'A 3D roguelike with cartoon graphics, where the main task is to move forward through various locations and fight enemies.<br>Made with Unity C#.',
        kvettkaTitle: 'Kvettka',
        kvettkaDesc: 'Palette editor for designers, artists and developers.<br>Built with Blazor and PostgreSQL.',
        githubTitle: 'GitHub Stats',
        githubContrib: 'Contributions in the last year',
        footer: '&copy; 2025 All rights reserved.'
    }
};
function setLang(lang) {
    const t = translations[lang];
    document.getElementById('name').innerHTML = t.name;
    document.getElementById('subtitle').innerHTML = t.subtitle;
    document.getElementById('about-title').innerHTML = t.aboutTitle;
    document.getElementById('about-text').innerHTML = t.aboutText;
    document.getElementById('skills-list').innerHTML = t.skills.join(' ');
    document.getElementById('projects-title').innerHTML = t.projectsTitle;
    document.getElementById('just-title').innerHTML = t.justTitle;
    document.getElementById('just-desc').innerHTML = t.justDesc;
    document.getElementById('kvettka-title').innerHTML = t.kvettkaTitle;
    document.getElementById('kvettka-desc').innerHTML = t.kvettkaDesc;
    document.getElementById('github-title').innerHTML = t.githubTitle;
    document.getElementById('github-contrib').innerHTML = t.githubContrib;
    document.getElementById('footer-text').innerHTML = t.footer;
    document.getElementById('lang-ru').classList.toggle('btn-light', lang === 'ru');
    document.getElementById('lang-ru').classList.toggle('btn-outline-light', lang !== 'ru');
    document.getElementById('lang-en').classList.toggle('btn-light', lang === 'en');
    document.getElementById('lang-en').classList.toggle('btn-outline-light', lang !== 'en');
}
document.getElementById('lang-ru').onclick = () => setLang('ru');
document.getElementById('lang-en').onclick = () => setLang('en');
// По умолчанию русский
setLang('ru');
