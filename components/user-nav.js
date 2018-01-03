
var userNav = '<nav class="main-nav blue transparent stick-fixed">'+
'            <div class="full-wrapper relative clearfix">'+
'                <div class="nav-logo-wrap local-scroll">'+
'                    <a href="index.html" class="logo">'+
'                        <img src="images/logo-white.png" alt="" />'+
'                        <span>Virtual World</span>'+
'                    </a>'+
'                </div>'+
'                <div class="mobile-nav">'+
'                    <i class="fa fa-bars"></i>'+
'                </div>'+
'                <div class="inner-nav desktop-nav">'+
'                    <ul class="clearlist">'+
'                        <li>'+
'                            <a> </a>'+
'                        </li>'+
'                        <li>'+
'                            <a href="#" onClick="$(\'#myModal\').modal(\'show\');" class="" style="font-size:12px;" data-toggle="modal" data-target="#basicModal">'+
'                                <i class="fa fa-user yourHomeIcon" style="font-size:18px;"></i> Your Home</a>'+
'                        </li>'+
'                    </ul>'+
'                </div>'+
'            </div>'+
'            <div class="modal fade" id="myModal" tabindex="1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
'                <div class="modal-dialog" role="document">'+
'                    <div class="modal-content">'+
'                        <div class="modal-header">'+
'                            <h3 class="modal-title text-center" id="exampleModalLabel" style="display:inline;">Log In </h3>'+
'                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
'                                <span aria-hidden="true">×</span>'+
'                            </button>'+
'                        </div>'+
'                        <div class="modal-body">'+
''+
'                            <div class="row">'+
'                                <div class="col-sm-6">'+
'                                    <form class="form-group">'+
'                                        <div class="form-group">'+
'                                            <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon2">'+
'                                        </div>'+
'                                        <div class="form-group">'+
'                                            <input type="text" class="form-control" placeholder="Password" aria-describedby="sizing-addon2">'+
'                                        </div>'+
'                                        <div class="form-group">'+
'                                            <a type="button" href="dashboard/index.html" class="btn-fullwidth btn btn-primary">Log In</a>'+
'                                        </div>'+
'                                    </form>'+
'                                </div>'+
'                                <div class="col-sm-6 socialLogIn">'+
'                                    <div class="form-group">'+
'                                        <button class="loginBtn loginBtn--facebook">'+
'                                            Login with Facebook'+
'                                        </button>'+
'                                    </div>'+
'                                    <div class="form-group">'+
'                                        <button class="loginBtn loginBtn--google">'+
'                                            Login with Google'+
'                                        </button>'+
'                                    </div>'+
'                                    <div class="form-group">'+
'                                        <button class="loginBtn loginBtn--twitter">'+
'                                            Login with Twitter'+
'                                        </button>'+
'                                    </div>'+
'                                    <div class="form-group">'+
'                                        <button class="loginBtn loginBtn--linkedin">'+
'                                            Login with LinkedIn'+
'                                        </button>'+
'                                    </div>'+
'                                </div>'+
'                            </div>'+
'                            <div class="modal-footer" style="text-align:center !important;">'+
'                                    Don\'t have an account yet?'+
'                                <a href="sign-up.html">Sign Up Here</a>'+
'                            </div>'+
'                        </div>'+
'                    </div>'+
'                </div>'+
'        </nav>';
	

	
document.querySelector(".userNav").innerHTML = userNav;