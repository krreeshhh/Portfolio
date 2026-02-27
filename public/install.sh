#!/bin/bash

# Exit on error
set -e

echo "Starting installation of applications..."

# Force database refresh
sudo pacman -Syy

# 1. Update system (Optional, good practice before installing)
# echo "Updating system..."
# yay -Syu --noconfirm

# 2. Install Native/AUR Packages using yay
PACKAGES=(
    "helium-browser-bin"
    "materialgram-bin"
    "visual-studio-code-bin"
    "spotify"
    "ab-download-manager-bin" # Corresponds to AB Download Manager
    "localsend-bin"
    "nodejs"
    "npm"
    "flatpak"
    "zapzap"
    "equibop-bin"
    "bun"
    "upscayl-bin"
)

echo "Installing packages with yay..."
# Using --noconfirm to automate the process. Remove it if you want to manually approve.
yay -S --needed --noconfirm "${PACKAGES[@]}"

# 3. Configure Flatpak (ensure Flathub repo exists)
echo "Configuring Flathub..."
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo

# 4. Install Flatpak Applications
echo "Installing Flatpak applications..."
flatpak install -y flathub io.github.diegopvlk.Cine
flatpak install -y flathub io.github.flattool.Warehouse

echo "All applications installed successfully!"
