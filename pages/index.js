import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import '/styles/index.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
    
    </Head>
    <main id="bod" className="flex min-h-screen flex-col items-center justify-center">
     <>
      

	<div id="section" class="font-roboto flex bg-green-50 justify-center align-center h-fit w-[100vw] items-center center-self">
		<div id="container" class="container flex justify-center">
			<div  className="flex row full-height justify-center">
				<div class="flex  justify-center col-12 text-center align-self-center py-5">
					<div id="section" class="flex flex-col pb-5 pt-5 pt-sm-2 text-center justify-center">
						<h6 id="h6" class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
			          <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          <label id="label" for="reg-log"></label>
						<div id="card-3d-wrap" class="card-3d-wrap ml-12">
							<div id="card-3d-wrapper">
								<div id="card-front">
									<div id="center-wrap">
										<div id="section" class=" text-center">
											<h4 id="h4" class="mb-4 pb-3">Log In</h4>
											<div id="form-group" class="form-group">
												<input type="email" name="logemail" class="form-style" placeholder="Your Email" id="form-style" autocomplete="off"/>
												<i id="input-icon" class="input-icon uil uil-at"></i>
											</div>	
											<div id="form-group" class="form-group mt-2">
												<input type="password" name="logpass" class="form-style" placeholder="Your Password" id="form-style" autocomplete="off"/>
												<i id="input-icon" class="input-icon uil uil-lock-alt"></i>
											</div>
											<a href="#" id="btn" class="btn mt-4">submit</a>
                            				<p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
				      					</div>
			      					</div>
			      				</div>
								<div id="card-back">
									<div id="center-wrap">
										<div id="section" class="text-center">
											<h4 class="mb-4 pb-3">Sign Up</h4>
											<div id="form-group">
												<input type="text" name="logname" class="form-style" placeholder="Your Full Name" id="form-style" autocomplete="off"/>
												<i id="input-icon" class="input-icon uil uil-user"></i>
											</div>	
											<div id="form-group" class="form-group mt-2">
												<input type="email" name="logemail" class="form-style" placeholder="Your Email" id="form-style" autocomplete="off"/>
												<i id="input-icon" class="input-icon uil uil-at"></i>
											</div>	
											<div id="form-group" class="form-group mt-2">
												<input type="password" name="logpass" id="form-style" class="form-style" placeholder="Your Password" autocomplete="off"/>
												<i id="input-icon" class="input-icon uil uil-lock-alt"></i>
											</div>
											<a href="#" id="btn" class="btn mt-4">submit</a>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
     </>
    </main>
    </>
  )
}
