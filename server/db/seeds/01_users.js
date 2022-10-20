exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 103, username: 'Mike', email: 'user2@plant.com', password: '$2b$10$h3wWfr1JiyIp8WGEya3dJOKisZ1dOfSjfQatCbMt5p9fiOMCkBLEm', admin: false },
        { id: 104, username: 'Shaun', email: 'admin@wateringCan.com', password: '$2b$10$h3wWfr1JiyIp8WGEya3dJOKisZ1dOfSjfQatCbMt5p9fiOMCkBLEm', admin: true }
      ])
    })
}