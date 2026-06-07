const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Ban a member from the server')
    .addUserOption(option => option.setName('member').setDescription('Member to ban').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('Ban reason').setRequired(false))
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
  
  async execute(interaction) {
    const member = interaction.options.getMember('member');
    const reason = interaction.options.getString('reason') || 'No reason provided';

    if (!member) return interaction.reply({ content: 'Member not found', ephemeral: true });

    try {
      await member.ban({ reason: reason });
      await interaction.reply(`✅ ${member.user.tag} has been banned. Reason: ${reason}`);
    } catch (error) {
      await interaction.reply({ content: 'I could not ban this member', ephemeral: true });
    }
  }
};
