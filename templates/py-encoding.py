# 系统默认编码
# print("system encode: "+sys.getdefaultencoding())
# 解决中文乱码
#改变标准输出的默认编码
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf8')