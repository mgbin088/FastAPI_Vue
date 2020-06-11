
启动方式:

    hypercorn main:app --bind 0.0.0.0:80
    
    --ca-certs CA_CERTS
    SSL CA证书文件的路径
    
    --certfile CERTFILE
    SSL证书文件的路径
    
    --debug
    启用调试模式，即额外的日志记录和检查