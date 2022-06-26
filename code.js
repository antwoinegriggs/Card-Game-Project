// Class for card template
// const createCard = document.querySelector("#card");

class CardTemplate {
  constructor(cardName, cardHealth, cardInfo, cardImage) {
    // Card Information
    this.name = cardName;
    this.health = cardHealth;
    this.powerSource = "";
    this.ultimateAbility = cardInfo;
    this.image = cardImage;

    // Create Card Frame
    this.cardFrame = document.createElement("div");
    this.cardFrame.setAttribute("id", "card");
    document.body.append(this.cardFrame);

    // Nameplate Creation
    this.namePlate = document.createElement("h2");
    this.namePlate.setAttribute("id", "nameplate");
    this.namePlate.textContent = this.name;
    this.cardFrame.append(this.namePlate);

    // Add Image
    this.addImage = document.createElement("img");
    this.addImage.setAttribute("id", "cardimage");
    this.addImage.src = this.image;
    this.cardFrame.append(this.addImage);

    // Add Ultimate Title
    this.title = document.createElement("h4");
    this.title.setAttribute("id", "cardtext");
    this.title.textContent = "Ultimate Ability";
    this.cardFrame.append(this.title);

    // Add Ultimate Text
    this.textBox = document.createElement("p");
    this.textBox.setAttribute("id", "ultimate");
    this.textBox.textContent = this.ultimateAbility;
    this.title.append(this.textBox);

    //Add Health
    this.healthBox = document.createElement("p");
    this.healthBox.setAttribute("id", "healthbox");
    this.healthBox.textContent = this.health;
    this.cardFrame.append(this.healthBox);
  }
}

// Create Warrior class
class Warrior extends CardTemplate {
  constructor(cardName, cardHealth, cardInfo, cardImage) {
    super(cardName, cardHealth, cardInfo, cardImage);
    this.powerSource = "Stamina";
    this.cardFrame.style.backgroundColor = "orangered";
  }
}

// Create Hunter class
class Hunter extends CardTemplate {
  constructor(cardName, cardHealth, cardInfo, cardImage) {
    super(cardName, cardHealth, cardInfo, cardImage);
    this.powerSource = "Energy";
    this.cardFrame.style.backgroundColor = "lightgreen";
  }
}

// Create Mage class
class Mage extends CardTemplate {
  constructor(cardName, cardHealth, cardInfo, cardImage) {
    super(cardName, cardHealth, cardInfo, cardImage);
    this.powerSource = "Mana";
    this.cardFrame.style.background = "lightblue";
  }
}

let Hero = new Mage(
  "Mage",
  12,
  "Ignite: Use 1 Skill Point, apply burn to opponent for 2 turns",
  "./images/firemage1.png"
);
let Hero2 = new Hunter(
  "Hunter",
  15,
  "Reload: Use 2 Skill Points, Draw two cards, discard one card",
  "./images/archer1.jpg"
);

let Hero3 = new Warrior(
  "Warrior",
  17,
  "Cleave: 3 Skill Points, Deal 4 damage to oppenent",
  "./images/warrior.jpg"
);
