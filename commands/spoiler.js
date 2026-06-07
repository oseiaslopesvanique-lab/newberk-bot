const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('spoiler')
    .setDescription('Posta um spoiler em modo sigilo'),
  
  async execute(interaction) {
    const modal = new ModalBuilder().setCustomId('spoilerModal').setTitle('Postar Spoiler');
    
    const textoInput = new TextInputBuilder().setCustomId('textoSpoiler').setLabel('Texto do spoiler').setStyle(TextInputStyle.Paragraph).setRequired(true);
    const canalInput = new TextInputBuilder().setCustomId('canalSpoiler').setLabel('ID do canal').setStyle(TextInputStyle.Short).setRequired(true);

    modal.addComponents(new ActionRowBuilder().addComponents(textoInput), new ActionRowBuilder().addComponents(canalInput));
    await interaction.showModal(modal);
  }
};
