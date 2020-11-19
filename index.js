
const BotDiscord = require("./Bot");
const bot = new BotDiscord();
let GerenciadorUsuario = require('./gerenciadorUsuario');
let gerenciadorDados = require("./gerenciadorDados")

const gdados = new gerenciadorDados()
gdados.carregarUsuarios();
console.log("index Tamanho : " + GerenciadorUsuario.listUsuario.length);
bot.ready();
bot.welcome();
bot.message();
bot.login();


