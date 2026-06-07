const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rules')
    .setDescription('Send the server rules to a channel'),
  
  async execute(interaction) {
    const modal = new ModalBuilder().setCustomId('rulesModal').setTitle('Send Rules');
    
    const textoInput = new TextInputBuilder().setCustomId('textRules').setLabel('Rules text').setStyle(TextInputStyle.Paragraph).setRequired(true);
    const canalInput = new TextInputBuilder().setCustomId('channelRules').setLabel('Channel ID').setStyle(TextInputStyle.Short).setRequired(true);

    modal.addComponents(new ActionRowBuilder().addComponents(textoInput), new ActionRowBuilder().addComponents(canalInput));
    await interaction.showModal(modal);
  }
};
