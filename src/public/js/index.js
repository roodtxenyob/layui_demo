layui.use('layer', function(){
    let layer = layui.layer;


    let loginPage = `<form class="layui-form" action="">
                        <div class="layui-form-item">
                            <div class="layui-input-inline">
                                <input type="text" name="title" required lay-verify="required" placeholder="请输入手机号或邮箱"
                                    autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <div class="layui-input-inline">
                                <input type="password" name="password" required lay-verify="required" placeholder="请输入密码"
                                    autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <div class="layui-input-inline">
                                <button class="layui-btn" lay-submit lay-filter="formDemo">登录</button>
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <div class="layui-input-inline">
                                <span>没有账号？</span><a href="">注册</a>
                                <a href="">忘记密码</a>
                            </div>
                        </div>
                    </form>` ;


    $("#sm_index_login").click(function(){
        // 登录
        layer.open({
            "title":"登录",
            "content":loginPage
        })
    })
    

});   