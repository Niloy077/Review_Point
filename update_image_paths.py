import os
import re

# Folder where your HTML files are
html_folder = r"D:\Other_projects\REVIEW_POINT"

# Loop through all files in the folder
for filename in os.listdir(html_folder):
    if filename.endswith(".html"):
        file_path = os.path.join(html_folder, filename)
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # This regex finds src="something.jpg" or src='something.png'
        new_content = re.sub(
            r'src=["\'](.*?\.(?:jpg|jpeg|png|gif))["\']',
            r'src="images/\1"',
            content,
            flags=re.IGNORECASE
        )

        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)

print("All image paths updated to the 'images/' folder.")
