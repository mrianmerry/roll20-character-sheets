const tabNames = ["combat", "configuration", "journal", "mecha", "pilot"];
tabNames.forEach((button) => {
  on(`clicked:${button}`, function () {
    setAttrs({
      "selected-tab": button,
    });
  });
});
