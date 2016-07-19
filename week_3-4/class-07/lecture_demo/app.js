var menuItems = ["Home", "Products", "Services", "Contact Us", "Locations", "Careers"];

function addMenuItems() {
  var menu = document.getElementById("main-nav");
  for (var index = 0; index < menuItems.length; index++) {
    var itemTextNode = document.createTextNode(menuItems[index]);
    var menuItemNode = document.createElement("a");
    menuItemNode.appendChild(itemTextNode);
    var hrefNode = document.createAttributeNode("href")
    menu.appendChild(menuItemNode);
  }
}

addMenuItems();
