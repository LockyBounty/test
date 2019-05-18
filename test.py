import os

cmd = os.popen("ls")

print(cmd.read())