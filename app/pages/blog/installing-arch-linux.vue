<script setup lang="ts">
  const { t } = useI18n({ useScope: 'local' })
  const { proxy } = useScriptCloudflareWebAnalytics()

  useHead({ title: t('title') })

  useSeoMeta({ description: t('description') })

  defineOgImage('Simple.takumi', { title: t('title'), description: t('description') })

  const code1 = `ping cbpf.br
timedatectl set-ntp true
lsblk
cfdisk /dev/sda
mkfs.ext4 /dev/sda1
mkfs.ext4 /dev/sda2
mount /dev/sda2 /mnt
mkdir /mnt/boot
mount /dev/sda1 /mnt/boot
lsblk
pacstrap /mnt base base-devel linux linux-firmware nano
genfstab /mnt
genfstab -U /mnt
genfstab -U /mnt /mnt/etc/fstab
arch-chroot /mnt /bin/bash
pacman -S networkmanager grub dosfstools os-prober mtools   (non uefi)
pacman -S networkmanager grub efibootmgr dosfstools os-prober mtools   (uefi)
systemctl enable NetworkManager
grub-install --target=i386-pc --recheck /dev/sda (non uefi)
grub-install --target=x86_64-efi --bootloader-id=grub_uefi --recheck /dev/sda (uefi)
grub-mkconfig -o /boot/grub/grub.cfg
nano /etc/default/grub
passwd
localectl set-keymap --no-convert br-abnt2
nano /etc/hostname
nano /etc/locale.gen
nano /etc/locale.conf
ln -sf /usr/share/zoneinfo/America/Brazil/ /etc/localtime
exit
umount -R /mnt
reboot
useradd -m gabrielrosa
passwd gabrielrosa
groupadd sudo
usermod -aG sudo gabrielrosa
nano /etc/sudoers
pacman -Syu
pacman -S neofetch`
</script>

<template>
  <article class="mx-auto w-full max-w-4xl px-6 py-12 sm:px-10">
    <PageHeader :title="t('title')" :description="t('description')" />
    <div class="mt-12 space-y-6 text-lg leading-relaxed text-obsidian/85 dark:text-snow/80">
      <div class="overflow-hidden rounded-2xl border border-obsidian/10 dark:border-snow/10">
        <ScriptYouTubePlayer video-id="YGX3None2y8" />
      </div>
      <p>{{ t('paragraph1') }}</p>
      <CodeHighlight file-name="Arch Install" :code="code1" lang="shell" />
      <p>{{ t('paragraph2') }}</p>
      <p>{{ t('final_paragraph') }}</p>
    </div>
  </article>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Installing Arch Linux (the easiest YouTube guide)",
    "description": "Effortlessly install Arch Linux with this YouTube guide, simplifying the process for a seamless setup.",
    "paragraph1": "Unfortunately, I didn't create an English version for this video. However, below, you'll find all the commands used. Perhaps it's possible to follow along just by watching.",
    "paragraph2": "Hope this helps! 😉",
    "final_paragraph": "If you have any questions or would like to get in touch, feel free to reach out to me on any of the social media platforms listed below. Thank you very much for reading!"
  },
  "pt": {
    "title": "Instalando o Arch Linux (o guia mais fácil do youtube)",
    "description": "Instale o Arch Linux facilmente com este guia no YouTube, simplificando o processo para uma configuração sem complicações.",
    "paragraph1": "Abaixo, você encontrará todos os comandos utilizados neste vídeo.",
    "paragraph2": "Espero ter ajudado! 😉",
    "final_paragraph": "Se você tiver alguma dúvida ou quiser entrar em contato, sinta-se à vontade para me encontrar em qualquer uma das redes sociais listadas abaixo. Muito obrigado por ler!"
  }
}
</i18n>
