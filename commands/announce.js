const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('announce')
    .setDescription('Send an announcement to a channel'),
  
  async execute(interaction) {
    const modal = new ModalBuilder().setCustomId('announceModal').setTitle('Create Announcement');
    
    const textoInput = new TextInputBuilder().setCustomId('textAnnounce').setLabel('Announcement text').setStyle(TextInputStyle.Paragraph).setRequired(true);
    const canalInput = new TextInputBuilder().setCustomId('channelAnnounce').setLabel('Channel ID').setStyle(TextInputStyle.Short).setRequired(true);

    modal.addComponents(new ActionRowBuilder().addComponents(textoInput), new ActionRowBuilder().addComponents(canalInput));
    await interaction.showModal(modal);
  }
};
