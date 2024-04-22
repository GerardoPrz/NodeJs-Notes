//GET /
//Homepage
exports.homepage =  async (req, res) => {
    const locals = {
        title: "NodeJs notes",
        description: "Notes app"
    }
  res.render("index", {
    locals,
    layout: "../views/layouts/front-page"
  });

}

//GET /
//About
exports.about =  async (req, res) => {
    const locals = {
        title: "About - NodeJs notes",
        description: "Notes app"
    }
  res.render("about", locals);

}