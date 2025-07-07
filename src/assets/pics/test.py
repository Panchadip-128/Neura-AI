import os

# Set your folder path here
folder_path = "."  # replace with your folder path

# Supported image extensions
image_extensions = (".png", ".jpg", ".jpeg", ".gif", ".webp")

# List to hold the formatted strings
output_list = []

# Loop through files in the folder
for file_name in os.listdir(folder_path):
    if file_name.lower().endswith(image_extensions):
        output_list.append(f'{{ imgSrc: require("../assets/{file_name}") }}')

# Print the array in the desired format
print("[")
for item in output_list:
    print(f"    {item},")
print("]")
