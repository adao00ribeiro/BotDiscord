
const BotDiscord = require("./Bot");
const bot = new BotDiscord();
let GerenciadorUsuario = require('./gerenciadorUsuario');
let gerenciadorDados = require("./gerenciadorDados")

const gdados = new gerenciadorDados()
gdados.carregarUsuarios();

bot.ready();
bot.welcome();
bot.message();
bot.login();


