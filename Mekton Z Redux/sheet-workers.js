const tabNames = ["character", "combat", "configuration", "journal", "mecha"];
tabNames.forEach((button) => {
  on(`clicked:${button}`, function () {
    setAttrs({
      "selected-tab": button,
    });
  });
});

on("change:theme", function (eventInfo) {
  setAttrs({
    "selected-theme": eventInfo.newValue,
  });
});
