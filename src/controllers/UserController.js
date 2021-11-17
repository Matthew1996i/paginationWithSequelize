const User = require('../models/User');

const paginate = (query, { page, pageSize }) => {
  const offset = page * pageSize;
  const limit = pageSize;

  return {
    ...query,
    offset,
    limit,
  };
};

module.exports = {
  async index(req, res){
    const page = req.params.page;
    const pageSize = 10;

    const data = await User.findAndCountAll(
      paginate(
        {
          where: {},
        },
        { page, pageSize },
      ),
    );

    const { count: totalItems } = data;
    const totalPages = Math.ceil(totalItems / pageSize);

    return res.json({
      ...data.rows,
      totalPages,
      page: page,
    });
  },
  async store(req, res){
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    return res.json(user);
  }
}