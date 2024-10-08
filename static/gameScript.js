let rotationSpeed = 0.01;
const updateRotationSpeed = () => {
  const rotationSpeedSlider = document.getElementById("rotation-speed-slider");
  const rotationValue = document.getElementById("rotation-speed-value");

  rotationSpeed = parseFloat(rotationSpeedSlider.value);
  rotationValue.textContent = rotationSpeed
    .toFixed(3)
    .replace(/^0\.0/, "0.")
    .replace(/^0./, "");
};

let force = 2;
const updateForce = () => {
  const forceSlider = document.getElementById("force-slider");
  const forceValueElement = document.getElementById("force-value");

  force = parseFloat(forceSlider.value);
  forceValueElement.textContent = force;
};

const availableLanguages = [
  { code: "en", name: "English" },
  { code: "ua", name: "Українська" },
  { code: "ru", name: "Русский" },
  { code: "pl", name: "Polski" },
  { code: "es", name: "Español" },
  { code: "de", name: "Deutsch" }
];
function populateLanguageSelects() {
  const selectElements = [
    document.getElementById("language-select"),
    document.getElementById("language-select-loadScreen")
  ];
  selectElements.forEach((selectElement) => {
    availableLanguages.forEach((language) => {
      const option = document.createElement("option");
      option.value = language.code;
      option.textContent = language.name;
      selectElement.appendChild(option);
    });
  });
}
document.addEventListener("DOMContentLoaded", (event) => {
  populateLanguageSelects();
});

const languageTexts = {
  en: {
    termsText:
      "By continuing, you agree to our <a onclick='openPrivacyPolicy()'>Privacy Policy</a> and <a onclick='openTermsOfService()'>Terms of Service</a>.",
    instructions: "Instructions",
    h6LoadingScreen:
      "Cubanage 3D is a game about controlling a cube and collecting shapes. Have fun with friends, as this game is hosted on a server along with other players.<br>Enjoy the game🔥",
    music: "Music",
    graphics: "<br>Graphics",
    enableFog: "Enable Fog:",
    particleTracker: "Particle Tracker:",
    sizeCube: "Cube Size:",
    sensitivity: "<br>Sensitivity",
    rotationSpeed: "Rotation Speed:",
    forceControl: "The force pulling the cube:",
    about: "<br>About",
    selectLanguage: "Select Language:",
    language: "<br>Language",
    settingsBtn: "Settings",
    cameraLook: "Look at the cube:",
    cameraFollow: "Follow the cube:",
    stars: "Stars:",
    spawn: "Spawn",
    h2SpawnText: "What do you want to spawn?",
    animSpawnText: "Animation spawn:",
    spawnCameraText:
      "<br>The camera has successfully spawned at the position: 0, 0, 0.",
    spawnCubeText:
      "<br>The cube has successfully spawned at the position: 0, 0, 0.",
    continueButtonText: "Continue",
    h1PausedText: "Paused",
    pauseText: "Pause",
    h5Instructions:
      "• Control the cube with the arrow keys.<br>• Collect stars (yellow shapes) to get points.<br><br>• Good luck :)",
    qualityText: "Graphics Quality:",
    h2Background: "<br>Background",
    textColorImages: "Images",
    textColorColors: "Colors",
    textColorOthers: "Others",
    settingsMoveLabel: "Switch the cube's movement mode:",
    labelVolumeMusic: "Volume:",
    labelSelectorMusic: "Select a music:",
    h2Map: "Map",
    rotateMapToggle: "Rotate map:",
    mapSizeText: "Map size:",
    h2KeyBindings: "Key Bindings",
    h2mobilePc: "Mobile & PC",
    keyboardOrButtonsLabel: "Buttons on the screen:",
    rotationSelectLabel: "Rotation:",
    horizontalRotationOption: "Horizontal",
    reverseHorizontalRotationOption: "Reverse Horizontal",
    verticalRotationOption: "Vertical",
    reverseVerticalRotationOption: "Reverse Vertical",
    UIControlSizeSpan: "UI controls Size:",
    colorSchemeLabel: "Color Scheme:",
    colorSchemeOptions: {
      light: "Light",
      dark: "Dark",
      blue: "Blue",
      green: "Green",
      yellow: "Yellow",
      pink: "Pink",
      red: "Red",
      orange: "Orange",
      purple: "Purple",
      brown: "Brown",
    },
    colorSchemeLabelLoading: "Select your favorite color:",
    colorSchemeInfoLoading: "This color will be used for personalization",
    playerCountLabel: "Players:",
  },
  ua: {
    termsText:
      "Продовжуючи, ви погоджуєтеся з нашою <a onclick='openPrivacyPolicy()'>Політикою конфіденційності</a> та <a onclick='openTermsOfService()'>Умовами обслуговування.</a>.",
    instructions: "Інструкція",
    h6LoadingScreen:
      "Cubanage 3D — це гра про керування кубом і збір фігур. Розважайтеся з друзями, оскільки ця гра розміщена на сервері разом з іншими гравцями.<br>Приємної гри🔥",
    music: "Музика",
    graphics: "<br>Графіка",
    enableFog: "Увімкнути туман:",
    particleTracker: "Анімація зірок:",
    sizeCube: "Розмір куба:",
    sensitivity: "<br>Чутливість",
    rotationSpeed: "Швидкість обертання:",
    forceControl: "Сила, що тягне куб:",
    about: "<br>Про гру",
    selectLanguage: "Виберіть мову:",
    language: "<br>Мова",
    settingsBtn: "Налаштування",
    cameraLook: "Дивитися на куб:",
    cameraFollow: "Слідкуйте за кубом:",
    stars: "Зірок:",
    spawn: "Спаун",
    h2SpawnText: "Що ви хочете заспавнити?",
    animSpawnText: "Анімаційний спаун:",
    spawnCameraText: "<br>Камеру успішно заспавнено на позицію: 0, 0, 0.",
    spawnCubeText: "<br>Куб успішно заспавнено на позицію: 0, 0, 0.",
    continueButtonText: "Продовжити",
    h1PausedText: "Призупинено",
    pauseText: "Пауза",
    h5Instructions:
      "• Керуйте кубом за допомогою стрілок.<br>• Збирайте зірки (жовті форми), щоб отримати бали.<br><br>• Удачі :)",
    qualityText: "Якість графіки:",
    h2Background: "<br>Фон",
    textColorImages: "Зображення",
    textColorColors: "Кольори",
    textColorOthers: "Інші",
    settingsMoveLabel: "Перемкнути режим руху куба:",
    labelVolumeMusic: "Гучність:",
    labelSelectorMusic: "Виберіть музику:",
    h2Map: "Карта",
    rotateMapToggle: "Обертати карту:",
    mapSizeText: "Розмір карти:",
    h2KeyBindings: "Призначення клавіш",
    h2mobilePc: "Мобільний телефон та ПК",
    keyboardOrButtonsLabel: "Кнопки на екрані:",
    rotationSelectLabel: "Орієнтація:",
    horizontalRotationOption: "Горизонтальна",
    reverseHorizontalRotationOption: "Зворотна горизонтальна",
    verticalRotationOption: "Вертикальна",
    reverseVerticalRotationOption: "Зворотна вертикальна",
    UIControlSizeSpan: "Розмір елементів керування:",
    colorSchemeLabel: "Кольорова схема:",
    colorSchemeOptions: {
      light: "Світла",
      dark: "Темна",
      blue: "Синя",
      green: "Зелена",
      yellow: "Жовта",
      pink: "Рожева",
      red: "Червона",
      orange: "Помаранчева",
      purple: "Фіолетова",
      brown: "Коричнева",
    },
    colorSchemeLabelLoading: "Виберіть свій улюблений колір:",
    colorSchemeInfoLoading: "Цей колір буде використано для персоналізації",
    playerCountLabel: "Гравці:",
  },
  ru: {
    termsText:
      "Продолжая, вы соглашаетесь с нашей <a onclick='openPrivacyPolicy()'>Политикой конфиденциальности</a> и <a onclick='openTermsOfService()'>Условиями использования</a>.",
    instructions: "Инструкции",
    h6LoadingScreen:
      "Cubanage 3D — это игра про управление кубом и сбор фигур. Развлекайтесь с друзьями, так как эта игра размещена на сервере вместе с другими игроками.<br>Приятной игры🔥",
    music: "Музыка",
    graphics: "<br>Графика",
    enableFog: "Включить туман:",
    particleTracker: "Отслеживание частиц:",
    sizeCube: "Размер куба:",
    sensitivity: "<br>Чувствительность",
    rotationSpeed: "Скорость вращения:",
    forceControl: "Сила притяжения куба:",
    about: "<br>О программе",
    selectLanguage: "Выберите язык:",
    language: "<br>Язык",
    settingsBtn: "Настройки",
    cameraLook: "Следить за кубом:",
    cameraFollow: "Следовать за кубом:",
    stars: "Звезды:",
    spawn: "Спавн",
    h2SpawnText: "Что вы хотите заспавнить?",
    animSpawnText: "Анимация спавна:",
    spawnCameraText: "<br>Камера успешно заспавнена на позиции: 0, 0, 0.",
    spawnCubeText: "<br>Куб успешно заспавнен на позиции: 0, 0, 0.",
    continueButtonText: "Продолжить",
    h1PausedText: "Пауза",
    pauseText: "Пауза",
    h5Instructions:
      "• Управляйте кубом с помощью стрелок.<br>• Собирайте звезды (желтые формы), чтобы получать очки.<br><br>• Удачи :)",
    qualityText: "Качество графики:",
    h2Background: "<br>Фон",
    textColorImages: "Изображения",
    textColorColors: "Цвета",
    textColorOthers: "Другие",
    settingsMoveLabel: "Переключить режим движения куба:",
    labelVolumeMusic: "Громкость:",
    labelSelectorMusic: "Выберите музыку:",
    h2Map: "Карта",
    rotateMapToggle: "Вращать карту:",
    mapSizeText: "Размер карты:",
    h2KeyBindings: "Назначение клавиш",
    h2mobilePc: "Мобильный телефон и ПК",
    keyboardOrButtonsLabel: "Кнопки на экране:",
    rotationSelectLabel: "Ориентация:",
    horizontalRotationOption: "Горизонтальная",
    reverseHorizontalRotationOption: "Обратная горизонтальная",
    verticalRotationOption: "Вертикальная",
    reverseVerticalRotationOption: "Обратная вертикальная",
    UIControlSizeSpan: "Размер элементов управления:",
    colorSchemeLabel: "Цветовая схема:",
    colorSchemeOptions: {
      light: "Светлая",
      dark: "Тёмная",
      blue: "Синяя",
      green: "Зелёная",
      yellow: "Жёлтая",
      pink: "Розовая",
      red: "Красная",
      orange: "Оранжевая",
      purple: "Фиолетовая",
      brown: "Коричневая",
    },
    colorSchemeLabelLoading: "Выберите ваш любимый цвет:",
    colorSchemeInfoLoading: "Этот цвет будет использован для персонализации",
    playerCountLabel: "Игроки:",
  },
  pl: {
    termsText:
      "Kontynuując, zgadzasz się z naszą <a onclick='openPrivacyPolicy()'>Polityką prywatności</a> i <a onclick='openTermsOfService()'>Regulaminem</a>.",
    instructions: "Instrukcje",
    h6LoadingScreen:
      "Cubanage 3D es un juego sobre controlar un cubo y recolectar formas. Diviértete con amigos, ya que este juego está alojado en un servidor junto con otros jugadores.<br>¡Disfruta del juego!🔥",
    music: "Muzyka",
    graphics: "<br>Grafika",
    enableFog: "Włącz mgłę:",
    particleTracker: "Śledzenie cząstek:",
    sizeCube: "Rozmiar kostki:",
    sensitivity: "<br>Wrażliwość",
    rotationSpeed: "Prędkość obrotowa:",
    forceControl: "Siła ciągnąca sześcian:",
    about: "<br>O grze",
    selectLanguage: "Wybierz język:",
    language: "<br>Język",
    settingsBtn: "Ustawienia",
    cameraLook: "Spojrzenie na sześcian:",
    cameraFollow: "Podążaj za sześcianem:",
    stars: "Gwiazdy:",
    spawn: "Ikra",
    h2SpawnText: "Co chcesz spawnować?",
    animSpawnText: "Pojawienie się animacji:",
    spawnCameraText: "<br>Kamera pomyślnie odrodziła się w pozycji: 0, 0, 0.",
    spawnCubeText: "<br>Kostka pomyślnie odrodziła się w pozycji: 0, 0, 0.",
    continueButtonText: "Kontynuować",
    h1PausedText: "Wstrzymano",
    pauseText: "Pauza",
    h5Instructions:
      "• Steruj sześcianem za pomocą strzałek.<br>• Zbieraj gwiazdy (żółte kształty), aby zdobywać punkty.<br><br>• Powodzenia :)",
    qualityText: "Jakość grafiki:",
    h2Background: "<br>Tło",
    textColorImages: "Obrazy",
    textColorColors: "Zabarwienie",
    textColorOthers: "Inni",
    settingsMoveLabel: "Przełącz tryb ruchu kostki:",
    labelVolumeMusic: "Głośność:",
    labelSelectorMusic: "Wybierz muzykę:",
    h2Map: "Mapa",
    rotateMapToggle: "Obracaj mapę:",
    mapSizeText: "Rozmiar mapy:",
    h2KeyBindings: "Przypisania klawiszy",
    h2mobilePc: "Mobilny telefon i PC",
    keyboardOrButtonsLabel: "Przyciski na ekranie:",
    rotationSelectLabel: "Rotacja:",
    horizontalRotationOption: "Horyzontalna",
    reverseHorizontalRotationOption: "Odwrotna horyzontalna",
    verticalRotationOption: "Wertykalna",
    reverseVerticalRotationOption: "Odwrotna wertykalna",
    UIControlSizeSpan: "Rozmiar elementów sterujących:",
    colorSchemeLabel: "Schemat kolorów:",
    colorSchemeOptions: {
      light: "Jasny",
      dark: "Ciemny",
      blue: "Niebieski",
      green: "Zielony",
      yellow: "Żółty",
      pink: "Różowy",
      red: "Czerwony",
      orange: "Pomarańczowy",
      purple: "Fioletowy",
      brown: "Brązowy",
    },
    colorSchemeLabelLoading: "Wybierz swój ulubiony kolor:",
    colorSchemeInfoLoading: "Ten kolor zostanie użyty do personalizacji",
    playerCountLabel: "Gracze:",
  },
  de: {
    termsText:
      "Durch die Fortsetzung stimmen Sie unserer <a onclick='openPrivacyPolicy()'>Datenschutzrichtlinie</a> und den <a onclick='openTermsOfService()'>Nutzungsbedingungen</a> zu.",
    instructions: "Anleitung",
    h6LoadingScreen:
      "Cubanage 3D ist ein Spiel über das Steuern eines Würfels und das Sammeln von Formen. Habt Spaß mit Freunden, denn dieses Spiel ist auf einem Server zusammen mit anderen Spielern gehostet.<br>Viel Spaß beim Spielen🔥",
    music: "Musik",
    graphics: "<br>Grafiken",
    enableFog: "Nebel aktivieren:",
    particleTracker: "Teilchen-Tracker:",
    sizeCube: "Würfelgröße:",
    sensitivity: "<br>Empfindlichkeit",
    rotationSpeed: "Rotationsgeschwindigkeit:",
    forceControl: "Die Kraft, die den Würfel zieht:",
    about: "<br>Über",
    selectLanguage: "Sprache auswählen:",
    language: "<br>Sprache",
    settingsBtn: "Einstellungen",
    cameraLook: "Kamerablick auf Würfel:",
    cameraFollow: "Folge dem Würfel:",
    stars: "Sterne:",
    spawn: "Laichen",
    h2SpawnText: "Was möchtest du spawnen?",
    animSpawnText: "Animations-Spawn:",
    spawnCameraText:
      "<br>Die Kamera wurde erfolgreich an der Position 0, 0, 0 gespawnt.",
    spawnCubeText:
      "<br>Würfel wurde erfolgreich an der Position 0, 0, 0 gespawnt.",
    continueButtonText: "Weitermachen",
    h1PausedText: "Angehalten",
    pauseText: "Pause",
    h5Instructions:
      "• Steuere den Würfel mit den Pfeiltasten.<br>• Sammle Sterne (gelbe Formen), um Punkte zu erhalten.<br><br>• Viel Glück :)",
    qualityText: "Grafikqualität:",
    h2Background: "<br>Hintergrund",
    textColorImages: "Bilder",
    textColorColors: "Farben",
    textColorOthers: "Andere",
    settingsMoveLabel: "Wechseln Sie den Bewegungsmodus des Würfels:",
    labelVolumeMusic: "Volumen:",
    labelSelectorMusic: "Wählen Sie Musik:",
    h2Map: "Karte",
    rotateMapToggle: "Karte drehen:",
    mapSizeText: "Karten Größe:",
    h2KeyBindings: "Tastenzuordnungen",
    h2mobilePc: "Mobil & PC",
    keyboardOrButtonsLabel: "Tasten auf dem Bildschirm:",
    rotationSelectLabel: "Rotation:",
    horizontalRotationOption: "Horizontal",
    reverseHorizontalRotationOption: "Umgekehrte Horizontal",
    verticalRotationOption: "Vertikal",
    reverseVerticalRotationOption: "Umgekehrte Vertikal",
    UIControlSizeSpan: "Größe der UI-Steuerelemente:",
    colorSchemeLabel: "Farbschema:",
    colorSchemeOptions: {
      light: "Hell",
      dark: "Dunkel",
      blue: "Blau",
      green: "Verde",
      yellow: "Amarillo",
      pink: "Rosa",
      red: "Rojo",
      orange: "Naranja",
      purple: "Púrpura",
      brown: "Marrón",
    },
    colorSchemeLabelLoading: "Wählen Sie Ihre Lieblingsfarbe:",
    colorSchemeInfoLoading: "Diese Farbe wird für die Personalisierung verwendet",
    playerCountLabel: "Spieler:",
  },
  es: {
    termsText:
      "Al continuar, aceptas nuestra <a onclick='openPrivacyPolicy()'>Política de privacidad</a> y nuestros <a onclick='openTermsOfService()'>Términos de servicio</a>.",
    instructions: "Instrucciones",
    h6LoadingScreen:
      "Cubanage 3D es un juego sobre controlar un cubo y recolectar formas. Diviértete con amigos, ya que este juego está alojado en un servidor junto con otros jugadores.<br>¡Disfruta del juego!🔥",
    music: "Música",
    graphics: "<br>Gráficos",
    enableFog: "Activar niebla:",
    particleTracker: "Seguimiento de partículas:",
    sizeCube: "Tamaño del cubo:",
    sensitivity: "<br>Sensibilidad",
    rotationSpeed: "Velocidad de rotación:",
    forceControl: "La fuerza que tira del cubo:",
    about: "<br>Acerca de",
    selectLanguage: "Seleccionar idioma:",
    language: "<br>Idioma",
    settingsBtn: "Ajustes",
    cameraLook: "mira el cubo:",
    cameraFollow: "sigue el cubo:",
    stars: "Estrellas:",
    spawn: "Aparecer",
    h2SpawnText: "¿Qué quieres generar?",
    animSpawnText: "Generación de animación:",
    spawnCameraText:
      "<br>La cámara se generó correctamente en la posición: 0, 0, 0.",
    spawnCubeText: "<br>El cubo se generó con éxito en la posición: 0, 0, 0.",
    continueButtonText: "Continuar",
    h1PausedText: "Pausa",
    pauseText: "Pausa",
    h5Instructions:
      "• Controla el cubo con las teclas de flecha.<br>• Recoge estrellas (formas amarillas) para obtener puntos.<br><br>• Buena suerte :)",
    qualityText: "Calidad de los gráficos:",
    h2Background: "<br>Fondo",
    textColorImages: "Imágenes",
    textColorColors: "Colores",
    textColorOthers: "Otros",
    settingsMoveLabel: "Cambia el modo de movimiento del cubo:",
    labelVolumeMusic: "Volumen:",
    labelSelectorMusic: "Elige música:",
    h2Map: "Mapa",
    rotateMapToggle: "Rotar mapa:",
    mapSizeText: "Tamaño del mapa:",
    h2KeyBindings: "Asignación de teclas",
    h2mobilePc: "Móvil y PC",
    keyboardOrButtonsLabel: "Botones en la pantalla:",
    rotationSelectLabel: "Rotación:",
    horizontalRotationOption: "Horizontal",
    reverseHorizontalRotationOption: "Horizontal Invertido",
    verticalRotationOption: "Vertical",
    reverseVerticalRotationOption: "Vertical Invertido",
    UIControlSizeSpan: "Tamaño de los controles de la interfaz:",
    colorSchemeLabel: "Esquema de colores:",
    colorSchemeOptions: {
      light: "Claro",
      dark: "Oscuro",
      blue: "Azul",
      green: "Grün",
      yellow: "Gelb",
      pink: "Rosa",
      red: "Rot",
      orange: "Orange",
      purple: "Lila",
      brown: "Braun",
    },
    colorSchemeLabelLoading: "Selecciona tu color favorito:",
    colorSchemeInfoLoading: "Este color se utilizará para la personalización",
    playerCountLabel: "Jugadores:",
  }
};

const changeLanguage = (sourceElement) => {
  const selectedLanguage = sourceElement.value;
  const texts = languageTexts[selectedLanguage];
  const selectLanguageOption = sourceElement.querySelector('option[value="selectLanguage"]');
  if (selectLanguageOption) selectLanguageOption.remove();

  if (sourceElement.id === "language-select-loadScreen") {
    document.getElementById("language-select").value = selectedLanguage;
    document.getElementById("terms-text").innerHTML = texts.termsText;
    document.getElementById("closeLoadingScreenBtn").innerHTML = texts.continueButtonText;
  }
  document.getElementById("h6LoadingScreen").innerHTML = texts.h6LoadingScreen;
  document.getElementById("instructions-btn").textContent = texts.instructions;
  document.getElementById("musicTextSettings").textContent = texts.music;
  document.getElementById("fog-checkbox").previousElementSibling.textContent = texts.enableFog;
  document.getElementById("size-text").textContent = texts.sizeCube;
  document.getElementById("rotation-text").textContent = texts.rotationSpeed;
  document.getElementById("force-text").textContent = texts.forceControl;
  document.getElementById("h2-about").innerHTML = texts.about;
  document.getElementById("h2-language").innerHTML = texts.language;
  document.getElementById("h2-sensitivity").innerHTML = texts.sensitivity;
  document.getElementById("h2-graphics").innerHTML = texts.graphics;
  document.getElementById("settings-btn").textContent = texts.settingsBtn;
  document.getElementById("cameraLookToggleText").textContent = texts.cameraLook;
  document.getElementById("camera-follow-label").textContent = texts.cameraFollow;
  document.getElementById("starsText").textContent = texts.stars;
  document.getElementById("button-spawn-screen").textContent = texts.spawn;
  document.getElementById("h2-spawn-screen").innerHTML = texts.h2SpawnText;
  document.getElementById("animSpawnText").textContent = texts.animSpawnText;
  document.getElementById("continueButton").textContent = texts.continueButtonText;
  document.getElementById("h2Paused").textContent = texts.h1PausedText;
  document.getElementById("pauseButton").textContent = texts.pauseText;
  document.getElementById("h5Instructions").innerHTML = texts.h5Instructions;
  document.getElementById("h1Instructions").innerHTML = texts.instructions;
  document.getElementById("quality-text").textContent = texts.qualityText;
  document.getElementById("h2-background").innerHTML = texts.h2Background;
  document.getElementById("textColorImages").textContent = texts.textColorImages;
  document.getElementById("textColorColors").textContent = texts.textColorColors;
  document.getElementById("textColorOthers").textContent = texts.textColorOthers;
  document.getElementById("toggleMoveLabel").textContent = texts.settingsMoveLabel;
  document.getElementById("textVolumeForSlider").textContent = texts.labelVolumeMusic;
  document.getElementById("labelMusicForToggle").textContent = texts.music + ":";
  document.getElementById("musicSelectorLabel").textContent = texts.labelSelectorMusic;
  document.getElementById("language-select").previousElementSibling.textContent = texts.selectLanguage;
  document.getElementById("h2-map").textContent = texts.h2Map;
  document.getElementById("rotateMapToggle").textContent = texts.rotateMapToggle;
  document.getElementById("mapSize-text").textContent = texts.mapSizeText;
  document.getElementById("h3-keyBindings").textContent = texts.h2KeyBindings;
  document.getElementById("open-settingsBindings-btn").textContent = texts.h2KeyBindings;
  document.getElementById("h2-mobile&pc").textContent = texts.h2mobilePc;
  document.getElementById("keyboardOrButtonsLabel").textContent = texts.keyboardOrButtonsLabel;
  document.getElementById("rotationSelectLabel").textContent = texts.rotationSelectLabel;
  document.getElementById("horizontalRotationOption").textContent = texts.horizontalRotationOption;
  document.getElementById("reverseHorizontalRotationOption").textContent = texts.reverseHorizontalRotationOption;
  document.getElementById("verticalRotationOption").textContent = texts.verticalRotationOption;
  document.getElementById("reverseVerticalRotationOption").textContent = texts.reverseVerticalRotationOption;
  document.getElementById("UIControlSizeSpan").textContent = texts.UIControlSizeSpan;
  document.getElementById("colorSchemeLabel").textContent = texts.colorSchemeLabel;
  Array.from(document.getElementById("colorSchemeSelect").options).forEach(option => {
    option.textContent = texts.colorSchemeOptions[option.value];
  });
  document.getElementById("colorSchemeLabelLoading").textContent = texts.colorSchemeLabelLoading;
  document.getElementById("colorSchemeInfoLoadingLabel").textContent = texts.colorSchemeInfoLoading+".";
  document.getElementById("player-count-label").textContent = texts.playerCountLabel;
};
