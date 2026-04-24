function setLang(lang) {

  if (lang === "de") {
    document.getElementById("subtitle").innerText = "Webseiten & Design für kleine Unternehmen";
    document.getElementById("aboutTitle").innerText = "Über das Projekt";
    document.getElementById("aboutText").innerText = "FHP ist ein persönliches Projekt zur Erstellung einfacher Webseiten.";
    document.getElementById("founderTitle").innerText = "Über mich";
    document.getElementById("f1").innerText = "Ich entwickle Webseiten für kleine lokale Unternehmen.";
    document.getElementById("f2").innerText = "Ich helfe Betrieben online sichtbar zu werden.";
    document.getElementById("f3").innerText = "Ich spreche Deutsch, Ukrainisch und Russisch.";
    document.getElementById("f4").innerText = "Ich arbeite mit modernen Lösungen.";
    document.getElementById("f5").innerText = "Keine registrierte Firma.";
    document.getElementById("servicesTitle").innerText = "Leistungen";
    document.getElementById("basicText").innerText = "Schnelle und günstige Website";
    document.getElementById("advText").innerText = "Individuelles Design";
    document.getElementById("contactTitle").innerText = "Kontakt";
    document.getElementById("whyTitle").innerText = "Warum ich?";
  }

  if (lang === "ua") {
    document.getElementById("subtitle").innerText = "Сайти для малого бізнесу";
    document.getElementById("aboutTitle").innerText = "Про проєкт";
    document.getElementById("aboutText").innerText = "Це особистий проєкт створення сайтів.";
    document.getElementById("founderTitle").innerText = "Про мене";
    document.getElementById("f1").innerText = "Я створюю сайти для малого бізнесу.";
    document.getElementById("f2").innerText = "Допомагаю бути видимими онлайн.";
    document.getElementById("f3").innerText = "Я знаю DE UA RU.";
    document.getElementById("f4").innerText = "Працюю з сучасними рішеннями.";
    document.getElementById("f5").innerText = "Не є фірмою.";
    document.getElementById("servicesTitle").innerText = "Послуги";
    document.getElementById("basicText").innerText = "Простий сайт";
    document.getElementById("advText").innerText = "Сучасний сайт";
    document.getElementById("contactTitle").innerText = "Контакти";
    document.getElementById("whyTitle").innerText = "Чому я?";
  }

  if (lang === "ru") {
    document.getElementById("subtitle").innerText = "Сайты для малого бизнеса";
    document.getElementById("aboutTitle").innerText = "О проекте";
    document.getElementById("aboutText").innerText = "Это личный проект по созданию сайтов.";
    document.getElementById("founderTitle").innerText = "Обо мне";
    document.getElementById("f1").innerText = "Я делаю сайты для малого бизнеса.";
    document.getElementById("f2").innerText = "Помогаю быть видимыми онлайн.";
    document.getElementById("f3").innerText = "Знаю DE UA RU.";
    document.getElementById("f4").innerText = "Использую современные решения.";
    document.getElementById("f5").innerText = "Это не фирма.";
    document.getElementById("servicesTitle").innerText = "Услуги";
    document.getElementById("basicText").innerText = "Простой сайт";
    document.getElementById("advText").innerText = "Современный сайт";
    document.getElementById("contactTitle").innerText = "Контакты";
    document.getElementById("whyTitle").innerText = "Почему я?";
  }

}
