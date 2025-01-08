import {
  accentName,
  accentEmail,
  avatar as img,
  ticketName,
  ticketSocial,
  ticketId,
  sectionConf,
  sectionTicket,
} from "./elements.js";

const randomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const generateId = (specString, id) =>
  anime({
    targets: ticketId,
    textContent: [1000, id],
    round: 1,
    duration: 1000,
    easing: "linear",
    update: (anim) => {
      const target = anim.animatables[0].target;
      target.textContent =
        specString +
        `${target.textContent}`.padStart(5, "0");
    },
  });

export const setDataInTicketSection = (obj) => {
  const { avatar, fullName, email, github } = Object.keys(
    obj
  ).reduce((acc, e) => {
    const isBigger = obj[e].length > 17;

    switch (e) {
      case "avatar":
        acc[e] = obj[e];
        break;
      case "fullName":
        acc[e] = isBigger
          ? `<data value=${obj[e]}>${
              obj[e].slice(0, 17) + "..."
            }</data>`
          : obj[e] || "Anonymous";
        break;
      case "github":
        acc[e] = isBigger
          ? `<data value=${obj[e]}>${
              obj[e].slice(0, 17) + "..."
            }</data>`
          : obj[e];
        break;
      case "email":
        acc[e] =
          obj[e].length > 30
            ? `<data value=${obj[e]}>${
                obj[e].slice(0, 30) + "..."
              }</data>`
            : obj[e];
        break;

      default:
        acc[e] = obj[e];
        break;
    }

    return acc;
  }, {});

  accentName.innerHTML = fullName;
  accentEmail.innerHTML = email;
  ticketName.innerHTML = fullName;
  ticketSocial.innerHTML = github;
  ticketSocial.href += obj.github.replaceAll("@", "");
  img.alt = fullName;
  img.src = avatar;
  generateId("#", randomInteger(1000, 10000));
  sectionConf.classList.add("visually-hidden");
  sectionTicket.classList.remove("visually-hidden");
};
