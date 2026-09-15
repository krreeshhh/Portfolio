#!/bin/bash
# Exit on error
set -e

echo "Starting installation of Hyprland and related applications..."
# Force database refresh
sudo pacman -Syy

echo "Installing Hyprland and desktop portal..."
sudo pacman -S --noconfirm hyprland xdg-desktop-portal-hyprland

echo "Installing window manager utilities and apps..."
sudo pacman -S --noconfirm \
waybar \
rofi-wayland \
kitty \
dunst \
swaybg \
swayidle \
wl-clipboard \
grim slurp \
brightnessctl \
pamixer \
pavucontrol \
network-manager-applet \
xdg-user-dirs \
polkit-gnome \
thunar thunar-archive-plugin file-roller \
ttf-jetbrains-mono-nerd \
noto-fonts noto-fonts-emoji

echo "Installing and configuring Pipewire..."
sudo pacman -S --noconfirm pipewire pipewire-alsa pipewire-pulse wireplumber
systemctl --user enable --now pipewire pipewire-pulse wireplumber

echo "Installing and configuring Bluetooth..."
sudo pacman -S --noconfirm bluez bluez-utils blueman
sudo systemctl enable --now bluetooth

echo "Installing and configuring SDDM..."
sudo pacman -S --noconfirm sddm
sudo systemctl enable sddm

echo "All applications installed successfully!"
