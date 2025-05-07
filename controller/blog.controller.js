const { where } = require("sequelize");
const { blogs } = require("../database/connection");

exports.fetchBlog = async (req, res) => {
  const fetchedBlogs = await blogs.findAll();
  res.json({
    message: "Blogs Fetched Successfully",
    data: fetchedBlogs,
  });
};

exports.createBlog = async function (req, res) {
  const { title, description, isSubmitted } = req.body;

  await blogs.create({
    title,
    description,
    isSubmitted,
  });

  res.json({
    message: "Blog created Successfully",
    title,
    description,
    isSubmitted,
  });
};

exports.deleteBlog = async (req, res) => {
  const id = req.params.id;
  await blogs.destroy({
    where: {
      id,
    },
  });
  res.json({
    message: "Blog deleted successfully !",
  });
};

exports.updateBlog = async (req, res) => {
  const id = req.params.id;
  const { title, description, isPublished } = req.body;

  await blogs.update(
    {
      title,
      description,
      isPublished,
    },
    {
      where: {
        id,
      },
    }
  );
  res.json({
    message: `Blog with id: ${id} has been updated successfully`,
  });
};
