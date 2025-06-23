function changeContent(page) {
    var contentDiv = document.getElementById('home');

    switch (page) {
        case 'demo':
            contentDiv.innerHTML = `
			demo code here
			`;
            break;

        case 'history':
            contentDiv.innerHTML = `
                                    <div class="container001">
                                        <img src="assets/images/history.jpeg" alt="Snow" style="width:100%;">
                                        <div class="centered text-white">
                                            <h1 style="font-size:clamp(14px, 4vw, 40px);color:rgb(255, 248, 248);">HISTORY</h1>
                                            <p style="font-size:clamp(14px, 4vw, 15px);color:rgb(255, 255, 255)">Home / HISTORY</p>
                                        </div>
                                    </div>

                                    <main class="home" id="home">
                                        <section id="about" class="about section">
                                            <!-- Section Title -->
                                            <div class="container section-title" data-aos="fade-up">
                                                <h1 class="" style="text-shadow: 0px 5px rgb(187, 195, 196);"><span style="color: black;">OUR
                                                    </span><strong style="color: #fe0000;">HISTORY</strong></h1>
                                            </div><!-- End Section Title -->
                                            <div class="container" data-aos="fade-up">
                                                <div class="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">
                                                    <div class="col-lg-15">
                                                        <!-- Tabs -->
                                                        <ul class="nav nav-pills mb-3">
                                                            <li><a class="nav-link " data-bs-toggle="pill" href="#about-tab1">Our History</a></li>
                                                            <li><a class="nav-link" data-bs-toggle="pill" href="#about-tab2">Our Mission</a></li>
                                                            <li><a class="nav-link" data-bs-toggle="pill" href="#about-tab3">Our Vision</a></li>
                                                        </ul><!-- End Tabs -->
                                                        <!-- Tab Content -->
                                                        <div class="tab-content shadow-lg p-3 m-1 rounded" style="background:#f5e4e6;" ;>
                                                            <div class="tab-pane show active " id="about-tab1">
                                                                <div class="d-flex align-items-center mt-4">
                                                                </div>
                                                                <p>
                                                                    Taluka Raibag Dist Belgaum Karnataka established in 1977 as credit co-operative
                                                                    society and converted as urban co-operative bank in the year 1997 by people
                                                                    committed to social cause in Harugeri.<br>
                                                                    The bank has always kept the goal of helping economically weaker section of the
                                                                    society and has carved a place as bank of masses and not only for classed.
                                                                    As per RBI license bearing no UBD/KAN1499P during 1997, Bank is providing Financial
                                                                    Services to the customers and members of the Bank.
                                                                    Apart from that Bank has also adopted new Generation Banking Facilities like Core
                                                                    Banking Solutions ,RTGS / NEFT, E-stamp, Deposit Insurance, Safe Locker, Cheque and
                                                                    bills collection and ATM facility
                                                                    in all its Branches.
                                                                </p>
                                                            </div>
                                                            <!-- End Tab 1 Content -->
                                                            <div class="tab-pane fade" id="about-tab2">
                                                                <div class="d-flex align-items-center mt-4">
                                                                    <i class="bi bi-check2"></i>
                                                                    <h4>We Have Great Mission</h4>
                                                                </div>
                                                                <p>
                                                                    To provide advanced and creative banking products and services for all our clients,
                                                                    both locally and internationally, through a successful team and using advanced
                                                                    programs, techniques and tools that keep up with the advancements in today’s world,
                                                                    in an effort to fulfill the aspirations of our clients, shareholders and employees,
                                                                    and to reflect our values of social responsibility.
                                                                </p>
                                                            </div><!-- End Tab 2 Content -->
                                                            <div class="tab-pane fade " id="about-tab3">
                                                                <div class="d-flex align-items-center mt-4">
                                                                    <i class="bi bi-check2"></i>
                                                                    <h4>We Have Vision</h4>
                                                                </div>
                                                                <p>To be the clients’ best choice through offering an integrated and distinctive bundle
                                                                    of banking services.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </main>
			                        `;
            break;

        case 'financialstatus':
            contentDiv.innerHTML = `
                                    <div class="container001">
                        <img src="assets/img/page-top-images/financial-status.jpg" alt="Snow" style="width:100%;">
                        <div class="centered text-white">
                        <h1 style="font-size:clamp(14px, 4vw, 40px);color:rgb(0, 0, 0);">Financial-status</h1>
                        <p style="font-size:clamp(14px, 4vw, 15px);color:rgb(17, 17, 17)">Home / Financial-status</p>
                        </div>
                    </div>

                    <main>
                    <!-- Team Section -->
                    <section id="team" class="team section">
                    <!-- Section Title -->
                    <div class="container section-title" data-aos="fade-up">
                        <!-- <h1 class="text-center"><span>Financial </span><strong>Status</strong></h1> -->
                        <h1 class="" style="text-shadow: 0px 5px rgb(187, 195, 196);"><span style="color: black;">FINANCIAL </span><strong style="color:rgb(254, 0, 0);">STATUS</strong></h1>
                        </div><!-- End Section Title -->

                <div>   <h1 class="text-center" style="text-shadow: 0px 5px rgb(187, 195, 196);"><span style="color: black;">COMMING </span><strong style="color:rgb(254, 0, 0);">SOON..</strong></h1></div>

                  <!--  <div class="container" data-aos="fade-up" data-aos-delay="100">
                        <div class="row gy-5">
                        <div class="table-responsive-sm">
                            <table>
                            <colgroup>
                                <col span="3" style="background-color:#a3a3e0">
                                <col span="3" style="background-color:#c8c8f5">
                            </colgroup>
                            <thead>
                                <tr class="table-dark">
                                <th scope="col" colspan="6" class="bg-dark" style="text-align: center;">FINANCIAL-STATUS</th>
                                </tr>
                                <tr class=" bg-primary text-white" style="border: solid black 1px;">
                                <th  >As on:31-03-2022</th>
                                <th > Expense</th>
                                <th >As On: 31-03-2023 AMOUNT</th>
                                <th >As On: 31-03-2022</th>
                                <th > Income</th>
                                <th >As On: 31-03-2023 AMOUNT</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                <td class="tg-1wig">80923865</td>
                                <td class="tg-1wig">Interest Paid</td>
                                <td class="tg-1wig">73487259.33</td>
                                <td class="tg-1wig">106472580.48</td>
                                <td class="tg-1wig">Interest Received</td>
                                <td class="tg-1wig">104172379</td>
                                </tr>
                                <tr class=""  >
                                <td class="">10573749</td>
                                <td class="tg-1wig">Staff Salaries &amp; Other Allowances</td>
                                <td class="tg-1wig">10264204.00</td>
                                <td class="tg-1wig">31846515.2</td>
                                <td class="tg-1wig">Interest Received on Investments</td>
                                <td class="tg-1wig">33829920.85</td>
                                </tr>
                                <tr>
                                <td class="tg-1wig">319915</td>
                                <td class="tg-1wig">Directors Fee &amp; other Allowances</td>
                                <td class="tg-1wig">478760</td>
                                <td class="tg-1wig">2195426.9</td>
                                <td class="tg-1wig">Other Incomes</td>
                                <td class="tg-1wig">3414500.79</td>
                                </tr>
                                <tr class="table-success" style="border: solid black 1px;">
                                <td class="tg-1wig">2002808.5</td>
                                <td class="tg-1wig">Rent &amp; Taxes</td>
                                <td class="tg-1wig">2012823</td>
                                <td class="tg-1wig"></td>
                                <td class="tg-1wig"></td>
                                <td class="tg-1wig"></td>
                                </tr>
                                <tr>
                                <td class="tg-1wig">147615.04</td>
                                <td class="tg-1wig">Postal &amp; Telephone Expenses</td>
                                <td class="tg-1wig">245450.7</td>
                                <td class="tg-0lax"></td>
                                <td class="tg-0lax"></td>
                                <td class="tg-1wig"></td>
                                </tr>
                                <tr class="table-success" style="border: solid black 1px;">
                                <td class="tg-1wig">427500</td>
                                <td class="tg-1wig">Legal Expenses</td>
                                <td class="tg-1wig">422300</td>
                                <td class="tg-0lax"></td>
                                <td class="tg-0lax"></td>
                                <td class="tg-1wig"></td>
                                </tr>
                                <tr>
                                <td class="tg-1wig">131290.44</td>
                                <td class="tg-1wig">Printing &amp; Stationery</td>
                                <td class="tg-1wig">166660</td>
                                <td class="tg-0lax"></td>
                                <td class="tg-0lax"></td>
                                <td class="tg-1wig"></td>
                                </tr>
                                <tr class="table-success" style="border: solid black 1px;">
                                <td class="tg-1wig">4120622.68</td>
                                <td class="tg-1wig">Other Expenses</td>
                                <td class="tg-1wig">5501421.83</td>
                                <td class="tg-0lax"></td>
                                <td class="tg-0lax"></td>
                                <td class="tg-1wig"></td>
                                </tr>
                                <tr>
                                <td class="tg-1wig">31676144.34</td>
                                <td class="tg-1wig">Provisions &amp; Depreciation</td>
                                <td class="tg-1wig">37916008.06</td>
                                <td ></td>
                                <td></td>
                                <td></td>
                                </tr>
                                <tr class="" style="border: solid black 1px;">
                                <td class="tg-1wig">10191012.58</td>
                                <td class="tg-1wig">Profit</td>
                                <td class="tg-1wig">10921913.72</td>
                                <td class="tg-0lax"></td>
                                <td class="tg-0lax"></td>
                                <td class="tg-1wig"></td>
                                </tr>
                                <tr class="bg-primary text-white">
                                <td class="tg-dgl5" ><b>140514522.58</b></td>
                                <td class="tg-1wig" ><b>Grand Total:</b></td>
                                <td class="tg-dgl5" ><b>141416800.64</b></td>
                                <td class="tg-dgl5" ><b>141416800.64</b></td>
                                <td class="tg-dgl5" ><b>141416800.64</b></td>
                                <td class="tg-dgl5" ><b>140514522.58</b></td>
                                            </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div> -->
                    </section><!-- /Team Section -->
                    </main>
                `;
            break;

        case 'management':
            contentDiv.innerHTML = `
                            <div class="container001">
                                <img src="assets/img/page-top-images/management.jpeg" alt="Snow" style="width:100%;">
                                <div class="centered text-white">
                                    <h1 style="font-size:clamp(14px, 4vw, 40px);color:rgb(249, 252, 249);">MANAGEMENT</h1>
                                    <p style="font-size:clamp(14px, 4vw, 15px);color:rgb(249, 252, 249);">Home / MANAGEMENT</p>
                                </div>
                            </div>
                            <main>
                                <!-- Team Section -->
                                <section id="team" class="team section">
                                    <div class="container section-title" data-aos="fade-up">
                                        <h1 class="" style="text-shadow: 0px 5px rgb(187, 195, 196);"><span style="color: black;">OUR
                                            </span><strong style="color:rgb(255, 0, 0);">MANAGEMENT</strong></h1>
                                        <p></p>
                                    </div>

                                    <!-- Team Section -->
                                    <section id="team" class="team section light-background" style="border-radius: 20px;">
                                        <div class="container management01 p-5"
                                            style="background-color: rgb(236, 188, 54);border-radius: 20px;">
                                            <div class="row gy-5">
                                                <div class="col-lg-3 col-md-2 member" data-aos="fade-up" data-aos-delay="100">
                                                    <div class="member-img">
                                                        <img src="assets/img/member/founder.png" class="img-fluid" alt="" height="50%">
                                                        <div class="social">
                                                        </div>
                                                    </div>
                                                    <div class="member-info text-center " style="color: black;">
                                                        <h4>SHRI B R PATIL</h4>
                                                        <span>Founder Chairman</span>
                                                    </div>
                                                </div>

                                                <div class="col-lg-3 col-md-2 member" data-aos="fade-up" data-aos-delay="100">
                                                    <div class="member-img">
                                                        <img src="assets/img/member/rajashekara_t.jpg" class="img-fluid" alt="">
                                                        <div class="social">
                                                        </div>
                                                    </div>
                                                    <div class="member-info text-center " style="color: black;">
                                                        <h4>SHRI. RAJASHEKHAR B PATIL</h4>
                                                        <span>President</span>
                                                    </div>
                                                </div>

                                                <div class="col-lg-3 col-md-2 member" data-aos="fade-up" data-aos-delay="500">
                                                    <div class="member-img">
                                                        <img src="assets/img/member/thamanna.jpg" class="img-fluid" alt="">
                                                        <div class="social">
                                                        </div>
                                                    </div>
                                                    <div class="member-info text-center">
                                                        <h4>SHRI. THAMMANNA S THELI</h4>
                                                        <span>Vice President</span>
                                                    </div>
                                                </div>

                                                <div class="col-lg-3 col-md-2 member" data-aos="fade-up" data-aos-delay="200">
                                                    <div class="member-img">
                                                        <img src="assets/img/member/prakash.jpg" class="img-fluid" alt="">
                                                        <div class="social">
                                                        </div>
                                                    </div>
                                                    <div class="member-info text-center" style="color: black;">
                                                        <h4>SHRI. PRAKASHA D KASHETTY</h4>
                                                        <span>Professional Director</span>
                                                    </div>
                                                </div>

                                                <div class="col-lg-3 col-md-2 member" data-aos="fade-up" data-aos-delay="300">
                                                    <div class="member-img">
                                                        <img src="assets/img/member/munguravadi.jpg" class="img-fluid" alt="">
                                                        <div class="social">
                                                        </div>
                                                    </div>
                                                    <div class="member-info text-center" style="color: black;">
                                                        <h4>SMT. C D MUNGURAVAADI </h4>
                                                        <span>Director</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3 col-md-2 member" data-aos="fade-up" data-aos-delay="500">
                                                    <div class="member-img">
                                                        <img src="assets/img/member/sanjeeva.jpg" class="img-fluid" alt="">
                                                        <div class="social">
                                                        </div>
                                                    </div>
                                                    <div class="member-info text-center">
                                                        <h4>SHRI. SANJEEVA A AVAKKANAVARA</h4>
                                                        <span>Director</span>
                                                    </div>
                                                </div>

                                                <div class="col-lg-3 col-md-2 member" data-aos="fade-up" data-aos-delay="500">
                                                    <div class="member-img">
                                                        <img src="assets/img/member/basagowda.jpg" class="img-fluid" alt="">
                                                        <div class="social">
                                                        </div>
                                                    </div>
                                                    <div class="member-info text-center">
                                                        <h4>SHRI. BASAGOWDA S PATIL</h4>
                                                        <span>Director</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3 col-md-2 member" data-aos="fade-up" data-aos-delay="500">
                                                    <div class="member-img">
                                                        <img src="assets/img/member/shankara.jpg" class="img-fluid" alt="">
                                                        <div class="social">
                                                        </div>
                                                    </div>
                                                    <div class="member-info text-center">
                                                        <h4>SHRI. SHANKARA S MAANASHETTY</h4>
                                                        <span>Director</span>
                                                    </div>
                                                </div>

                                                <div class="col-lg-3 col-md-2 member" data-aos="fade-up" data-aos-delay="500">
                                                    <div class="member-img">
                                                        <img src="assets/img/member/prabulinga.jpg" class="img-fluid" alt="">
                                                        <div class="social">
                                                        </div>
                                                    </div>
                                                    <div class="member-info text-center">
                                                        <h4>SHRI. PRABHULINGA S PAALAMBAAVI</h4>
                                                        <span>Director</span>
                                                    </div>
                                                </div>

                                                <div class="col-lg-3 col-md-2 member" data-aos="fade-up" data-aos-delay="500">
                                                    <div class="member-img">
                                                        <img src="assets/img/member/bhimagonda.jpg" class="img-fluid" alt="">
                                                        <div class="social">
                                                        </div>
                                                    </div>
                                                    <div class="member-info text-center">
                                                        <h4>SHRI. BHIMAGONDA S KARNAVAADI</h4>
                                                        <span>Director</span>
                                                    </div>
                                                </div>

                                                <div class="col-lg-3 col-md-2 member" data-aos="fade-up" data-aos-delay="500">
                                                    <div class="member-img">
                                                        <img src="assets/img/member/hanamantha.jpg" class="img-fluid" alt="">
                                                        <div class="social">
                                                        </div>
                                                    </div>
                                                    <div class="member-info text-center">
                                                        <h4>SHRI. HANUMANTA C MADIVAL</h4>
                                                        <span>Director</span>
                                                    </div>
                                                </div>

                                                <div class="col-lg-3 col-md-2 member" data-aos="fade-up" data-aos-delay="500">
                                                    <div class="member-img">
                                                        <img src="assets/img/member/ramappa.jpg" class="img-fluid" alt="">
                                                        <div class="social">
                                                        </div>
                                                    </div>
                                                    <div class="member-info text-center">
                                                        <h4>SHRI RAMAPPA C NAYAK</h4>
                                                        <span>Director</span>
                                                    </div>
                                                </div>

                                                <div class="col-lg-3 col-md-2 member" data-aos="fade-up" data-aos-delay="500">
                                                    <div class="member-img">
                                                        <img src="assets/img/member/jayashree.jpg" class="img-fluid" alt="">
                                                        <div class="social">
                                                        </div>
                                                    </div>
                                                    <div class="member-info text-center">
                                                        <h4>SHRI. JAVASHREE R PATIL</h4>
                                                        <span>Director</span>
                                                    </div>
                                                </div>

                                                <div class="col-lg-3 col-md-2 member" data-aos="fade-up" data-aos-delay="500">
                                                    <div class="member-img">
                                                        <img src="assets/img/member/rekha.jpg" class="img-fluid" alt="">
                                                        <div class="social">
                                                        </div>
                                                    </div>
                                                    <div class="member-info text-center">
                                                        <h4>SHRI REKHA C DESHAPANDE</h4>
                                                        <span>Director</span>
                                                    </div>
                                                </div>

                                                <div class="col-lg-3 col-md-2 member" data-aos="fade-up" data-aos-delay="500">
                                                    <div class="member-img">
                                                        <img src="assets/img/member/yashodha.jpg" class="img-fluid" alt="">
                                                        <div class="social">
                                                        </div>
                                                    </div>
                                                    <div class="member-info text-center">
                                                        <h4>SHRI YASHODHA V PATIL</h4>
                                                        <span>Director</span>
                                                    </div>
                                                </div>

                                                <div class="col-lg-3 col-md-2 member" data-aos="fade-up" data-aos-delay="500">
                                                    <div class="member-img">
                                                        <img src="assets/img/member/kalpana.jpg" class="img-fluid" alt="">
                                                        <div class="social">
                                                        </div>
                                                    </div>
                                                    <div class="member-info text-center">
                                                        <h4>SHRI KALPANA R MADARA</h4>
                                                        <span>Director</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3 col-md-2 member" data-aos="fade-up" data-aos-delay="400">
                                                    <div class="member-img">
                                                        <img src="assets/img/member/shivaputra.jpg" class="img-fluid" alt="">
                                                        <div class="social">
                                                        </div>
                                                    </div>
                                                    <div class="member-info text-center" style="color: black;">
                                                        <h4>SHRI. SHIVAPUTRA S AMARASHETTY</h4>
                                                        <span>CEO</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    </div>
                                </section>
                            </main>

            `;
            break;

        case 'ATM':
            contentDiv.innerHTML = `
                     <div class="container001">
                            <img src="assets/img/page-top-images/Atm5.jpg" alt="Snow" style="width:100%;">
                            <div class="centered text-white">
                            <h1 style="font-size:clamp(14px, 4vw, 40px);color:rgb(249, 252, 249);">ATM</h1>
                            <p style="font-size:clamp(14px, 4vw, 15px);color:rgb(255, 255, 255)">Home / ATM</p>
                            </div>
                        </div>
    
                        <main>
                            <section id="services" class="services">
                            <div class="container">
                                <div class="section-title">
                                <!-- <h2>/ATM</h2> -->
                                <h1 class="" style="text-shadow: 0px 5px rgb(187, 195, 196);"><span style="color: black;"></span><strong style="color:rgb(254, 0, 0);">ATM</strong></h1>
    
                                </div>
                                <div class="container">
                                <div class="row" >
                                    <div class="col text-left">
                                    <div class=" text-center">
                                       
                                    </div>
                                    <p><i class="fa fa-chevron-circle-right" aria-hidden="true" style="color: rgb(62, 62, 160);"></i> Janata Co-operative Bank's RuPay Debit cum ATM Card allows you great flexibility in operating your account during business hours anywhere anytime. You can use it at any ATM in the NFS network which displays the RuPay logo. </p>
                                    <p><i class="fa fa-chevron-circle-right" aria-hidden="true" style="color: rgb(62, 62, 160);"></i>  You can use the card to enquire about your account balance, get a mini statement and also withdraw cash. To change your Duplicate pin visit our bank.</p>

                                    </div>
                                    <div class="col-md-auto ">
                                    <img src="assets/img/ATM photo7.jpg" width="380px" />
                                    </div>
                                </div>
                                    </div>
                            </div>
                            </section>
                        </main>
    
                `;
            break;

        case 'RTGS_NEFT':
            contentDiv.innerHTML = `
                 <div class="container001">
                        <img src="assets/img/page-top-images/rtgs.jpg" alt="Snow" style="width:100%;">
                        <div class="centered text-white">
                        <h1 style="font-size:clamp(14px, 4vw, 40px);color:rgb(249, 252, 249);">RTGS/NEFT</h1>
                        <p style="font-size:clamp(14px, 4vw, 15px);color:rgb(255, 255, 255)">Home / RTGS/NEFT</p>
                        </div>
                    </div>

                    <main>
                        <section id="services" class="services">
                        <div class="container">
                            <div class="section-title">
                            <!-- <h2>RTGS/NEFT</h2> -->
                            <h1 class="" style="text-shadow: 0px 5px rgb(187, 195, 196);"><span style="color: black;">RTGS </span><strong style="color:rgb(254, 0, 0);">NEFT</strong></h1>

                            </div>
                            <div class="container">
                               <div class="row" >
                                <div class="col-md-auto">
                                <img src="assets/img/rtgsneft1.jpg" width="380px" />
                                </div>
                                <div class="col text-left">
                                <div class=" text-center">
                                    <b><h2 style="color: black;">RTGS</h2></b></br>
                                </div>
                                <p><i class="fa fa-chevron-circle-right" aria-hidden="true" style="color: rgb(62, 62, 160);"></i> The acronym 'RTGS' stands for Real Time Gross Settlement, which can be defined as the continuous
                                    (real-time) settlement of funds transfers individually on an order-by-order basis (without netting).
                                    'Real Time' means the processing of instructions at the time they are received rather than at some later
                                    time. </p>
                                <P><i class="fa fa-chevron-circle-right" aria-hidden="true" style="color: rgb(62, 62, 160);"></i> Customers can transfer funds above Rs. 2 lakhs to any bank account in India on same day.</P>
                                <p><i class="fa fa-chevron-circle-right" aria-hidden="true" style="color: rgb(62, 62, 160);"></i> Timings for Transaction - Bank's Business hours.</p>
                                <p><i class="fa fa-chevron-circle-right" aria-hidden="true" style="color: rgb(62, 62, 160);"></i> cost of service as per service charges.</p>
                                </div>
                            </div>
                            
                            <br />
                            <br />
                            <hr style="height:2px;border-width:0;color:black;background-color:black;width:50%;margin:auto">
                            <br />
                            <br />
                           <div class="row" >
                                <div class="col text-left">
                                <div class=" text-center">
                                    <b><h2 style="color: black;">NEFT</h2></b></br>
                                </div>
                                <p><i class="fa fa-chevron-circle-right" aria-hidden="true" style="color: rgb(62, 62, 160);"></i> Electronic Funds Transfer (NEFT) is a nation-wide payment system facilitating one-to-one
                                    funds transfer. Under this Scheme, individuals, firms and corporate can electronically transfer funds
                                    from any bank branch to any individual, firm or corporate having an account with any other bank branch
                                    in the country participating in the Scheme.</p>
                                <p><i class="fa fa-chevron-circle-right" aria-hidden="true" style="color: rgb(62, 62, 160);"></i> There is a limit of below Rs. 2 lakh per transaction.</p>
                                <p><i class="fa fa-chevron-circle-right" aria-hidden="true" style="color: rgb(62, 62, 160);"></i> Timings for Transaction - Bank's Business hours.</p>
                                <p><i class="fa fa-chevron-circle-right" aria-hidden="true" style="color: rgb(62, 62, 160);"></i> cost of service as per service charges.</p>
                                </div>
                                <div class="col-md-auto ">
                                <img src="assets/img/rtgs-neft.png" width="380px" />
                                </div>
                            </div>
                            <br />
                            </div>
                        </div>
                        </section>
                    </main>

			`;
            break;

        case 'housing_loan':
            contentDiv.innerHTML = `              
                <div class="container001">
                    <img src="assets/img/page-top-images/Home_loan4.jpg" alt="Snow" style="width:100%;">
                    <div class="centered text-white">
                    <h1 style="font-size:clamp(14px, 4vw, 40px);color:rgb(239, 255, 9);">HOME LOANS</h1>
                    <p style="font-size:clamp(14px, 4vw, 15px);color:rgb(6, 28, 224)">Home / LOANS</p>
                    </div>
                </div>

                <main>
                <!-- Team Section -->
                <section id="team" class="team section">

                <!-- Section Title -->
                <div class="container section-title" data-aos="fade-up">
                    <!-- <h2>Gold-loan</h2> -->
                    <h1 class="" style="text-shadow: 0px 5px rgb(187, 195, 196);"><span style="color: black;">HOME </span><strong style="color: rgb(255, 0, 0);">LOAN</strong></h1>

                    <!-- <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> -->
                </div><!-- End Section Title -->

                <div class="container" data-aos="fade-up" data-aos-delay="100">

                    <div class="table-responsive-sm">
               <table style="border: solid black 2px;">
                <thead>
                  <tr class="table-dark" style="background-color:rgb(10, 10, 10); color: antiquewhite; font-size: 20px;">
                    <th scope="col" colspan="7" style="text-align: center; color: antiquewhite;">Loan Interest Rates (w.e.f 01.06.2025)</th>
                  </tr>
                </thead>
                <style>
                .add {
                    background-color : rgb(254, 231, 255);
                }

                .even {
                        background-color:rgb(255, 255, 255);
                 }
                     table, th, td {
                        border: 0.5px solid rgb(3, 3, 3);
                        color: black;
                        }
                </style>
                <tbody>
                  <tr class="add"  class="text-white">
                    <td colspan="" class="text-center"> <b>SL.NO</b></td>
                    <td colspan="" class="text-center"> <b>TITLE</b></td>
                    <!-- <td></td> -->
                    <!-- <td></td> -->
                    <td class="text-center"><b>INTEREST ON 01.06.2025</b></td>
                  </tr>

                  <tr class="even" >
                    <td class="text-center">01</td>
                    <td>Purpose</td>
                    <td>Purchase of House site / Purchase of House / House Construction/ House Repairs/ Marriage Expenses</td>
                  </tr>

                   <tr class="even" >
                    <td class="text-center">02</td>
                    <td>Eligibility</td>
                    <td>A Khatha B Khatha,Four Districts Limit,<br>
                        Salaried Employees / Businessmen/Professionals and Individuals with proven source of Income</td>


                  </tr>
                  <tr class="text-white add" >
                    <td class="text-center">03</td>
                    <td>Loan Limit</td>
                    <td>Rs.7500000/-(seventy five lakhs) Maximum</td>

                  </tr>

                  <tr class="text-white add" >
                    <td class="text-center">04</td>
                    <td>Rate of Interest</td>
                    <td>
                    <table style="color: antiquewhite;">
                        <tr>
                          <td>A) For Repair & Renovation & purchase of property with monthly EMI</td>
                          <td>Upto Rs.75 Lakhs</td>
                          <td> 9% </td>
                        </tr>

                        <tr>
                          <td>B) For Repair & Renovation and purchase of proprerty with Non EMI</td>
                          <td>Upto Rs.25 Lakhs</td>
                          <td> 11.50% </td>
                        </tr>

                          <tr>
                          <td></td>
                          <td>Rs.25 Lakhs to Rs.75 Lakhs</td>
                          <td>11.50% </td>
                        </tr>

                      </table> 
                    
                    </td>
                  </tr>

                

                 
                  <tr class="even" >
                    <td class="text-center">05</td>
                    <td>Repayment Period</td>
                    <td>Repayable in 180  EMI </td>
                  </tr>

                  <tr class="text-white add" >
                    <td class="text-center">06</td>
                    <td>Security</td>
                    <td>Mortgage of the Property by way of Registered Memorandum of Deposit of Title deeds</td>
                  </tr>

                  <tr class=" even">
                    <td class="text-center">07</td>
                    <td>Share Holding</td>
                    <td>2.5% of the Loan amount as per RBI notification</td>
                  </tr>


                  <tr class="text-white add" >
                    <td class="text-center">08</td>
                    <td>Purpose Proof</td>
                    <td>Construction/Approved plan<br>
                            Construction Extension<br>
                            Approved plan, Estimation for construction by Registered civil engineers.Property photo ( 2 views) – property and road.<br>
                            Purchase of House Agreement of Sale executed on stamp paper Xerox copies of property documents.</td>
                  </tr>

                     <tr class="even" >
                    <td class="text-center">09</td>
                    <td>Documentation</td>
                    <td>Prescribed Application Form with Attested Copies of Photo ID – Voter ID/DrivLicense/Passport/Aadhar PAN Card<br>
                            Income Proof - Salaried<br>
                            Certified Salary Certificate/Payslips- 3 months Form 16A issued by employer, Copy of Passbook 3 years IT Returns
                            Business/Professionals<br>
                            3 years IT Returns, with Tax paid challan Professionals/ Bank pass book/statement
                            Self employed<br>
                            1. Consent declaration from family members wherever applicable.<br>
                            2. Income proof as above of family members wherever applicable.</td>
                  </tr>

                  
                </tbody>
              </table>

                    </div>
                </div>
                </section><!-- /Team Section -->
                </main>
                        `;
            break;

        case 'mortage_loan':
            contentDiv.innerHTML = `              
                    <div class="container001">
                        <img src="assets/img/page-top-images/Mortgauge_loan2.jpg" alt="Snow" style="width:100%;">
                        <div class="centered text-white">
                        <h1 style="font-size:clamp(14px, 4vw, 40px);color:rgb(5, 8, 177);">MORTGAGE LOAN</h1>
                        <p style="font-size:clamp(14px, 4vw, 15px);color:rgb(6, 28, 224)">Home / LOAN</p>
                        </div>
                    </div>
                    <main>
                    <!-- Team Section -->
                    <section id="team" class="team section">
                    <!-- Section Title -->
                    <div class="container section-title" data-aos="fade-up">
                        <!-- <h2>Gold-loan</h2> -->
                        <h1 class="" style="text-shadow: 0px 5px rgb(187, 195, 196);">MORTGAGE <span style="color: black;"></span><strong style="color: rgb(255, 0, 0);">LOAN</strong></h1>
                        <!-- <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> -->
                    </div><!-- End Section Title -->
    
                    <div class="container" data-aos="fade-up" data-aos-delay="100">
    
                        <div class="table-responsive-sm">
                <table style="border: solid black 2px;">
                <thead>
                  <tr class="table-dark" style="background-color:rgb(10, 10, 10); color: antiquewhite; font-size: 20px;">
                    <th scope="col" colspan="7" style="text-align: center; color: antiquewhite;">Loan Interest Rates (w.e.f
                    01.06.2025)</th>
                  </tr>
                </thead>
                <style>
                .add {
                    background-color : rgb(254, 231, 255);
                }

                .even {
                        background-color:rgb(255, 255, 255);
                 }
                     table, th, td {
                        border: 0.5px solid rgb(3, 3, 3);
                        color: black;
                        }
                </style>
                <tbody>
                  <tr class="add"  class="text-white">
                    <td colspan="" class="text-center"> <b>SL.NO</b></td>
                    <td colspan="" class="text-center"> <b>TITLE</b></td>
                    <!-- <td></td> -->
                    <!-- <td></td> -->
                    <td class="text-center"><b>INTEREST ON 01.06.2025</b></td>
                  </tr>

                  <tr class="even" >
                    <td class="text-center">01</td>
                    <td>Purpose</td>
                    <td>Purchase of House site / Purchase of House / House Construction/ House Repairs/ Marriage Expenses</td>
                  </tr>                               

                  <tr class="even" >
                    <td class="text-center">02</td>
                    <td>Eligibility</td>
                    <td>A Khatha B Khatha,Four Districts Limit,<br>
                        Salaried Employees / Businessmen/Professionals and Individuals with proven source of Income</td>
                  </tr>
                  <tr class="text-white add" >
                    <td class="text-center">03</td>
                    <td>Loan Limit</td>
                    <td>Rs.7500000/-(Seventy Five lakhs) Maximum</td>
                  </tr>
                  <tr class="text-white add" >
                    <td class="text-center">04</td>
                    <td>Rate of Interest</td>
                    <td>
                    <table style="color: antiquewhite;">
                        <tr>
                          <td>A) For Repair & Renovation
                          <td>Upto Rs.25 Lakhs</td>
                          <td>11% to 12.50% </td>
                        </tr>
                        <tr>
                          <td>B) For Construction/ Purchase</td>
                          <td>Upto Rs.25 Lakhs</td>
                          <td>11% to 12.50% </td>
                        </tr>
                          <tr>
                          <td></td>
                          <td>Rs.25 Lakhs to Rs.75 Lakhs</td>
                          <td>11% to 12.50% </td>
                        </tr>
                          <tr>
                          <td></td>
                          <td>Above Rs.75 Lakhs</td>
                          <td>11% to 12.50%  </td>
                        </tr>
                      </table> 
                    
                    </td>
                  </tr>
                  <tr class="even" >
                    <td class="text-center">05</td>
                    <td>Repayment Period</td>
                    <td>Repayable in 180  EMI </td>
                  </tr>

                  <tr class="text-white add" >
                    <td class="text-center">06</td>
                    <td>Security</td>
                    <td>Mortgage of the Property by way of Registered Memorandum of Deposit of Title deeds</td>
                  </tr>

                 <tr class="even" >
                    <td class="text-center">07</td>
                    <td>Share Holding</td>
                    <td>2.5% of the Loan amount as per RBI notification</td>
                  </tr>
                  <tr class="text-white add" >
                    <td class="text-center">08</td>
                    <td>Purpose Proof</td>
                    <td>Construction/Approved plan<br>
                            Construction Extension<br>
                            Approved plan, Estimation for construction by Registered civil engineers.Property photo ( 2 views) – property and road.<br>
                            Purchase of House Agreement of Sale executed on stamp paper Xerox copies of property documents.</td>
                  </tr>
                     <tr class="even" >
                    <td class="text-center">09</td>
                    <td>Documentation</td>
                    <td>Prescribed Application Form with Attested Copies of Photo ID – Voter ID/DrivLicense/Passport/Aadhar PAN Card<br>
                            Income Proof - Salaried<br>
                            Certified Salary Certificate/Payslips- 3 months Form 16A issued by employer, Copy of Passbook 3 years IT Returns
                            Business/Professionals<br>
                            3 years IT Returns, with Tax paid challan Professionals/ Bank pass book/statement
                            Self employed<br>
                            1. Consent declaration from family members wherever applicable.<br>
                            2. Income proof as above of family members wherever applicable.</td>
                  </tr>
                </tbody>
              </table>
    
                        </div>
                    </div>
                    </section><!-- /Team Section -->
                    </main>
                            `;
            break;

        case 'hehicle_loan':
            contentDiv.innerHTML = `              
                <div class="container001">
                    <img src="assets/img/vehical_loan_4 (2).jpg" alt="Snow" style="width:100%;">
                    <div class="centered text-white">
                    <h1 style="font-size:clamp(14px, 4vw, 40px);color:rgb(32, 47, 255);">VEHICLE LOAN</h1>
                    <p style="font-size:clamp(14px, 4vw, 15px);color:rgb(32, 47, 255)">Home / LOAN</p>
                    </div>
                </div>

                <main>
                <!-- Team Section -->
                <section id="team" class="team section">
                <div class="container section-title" data-aos="fade-up">>
                    <h1 class="" style="text-shadow: 0px 5px rgb(187, 195, 196);">VEHICLE <span style="color: black;"></span><strong style="color: rgb(255, 0, 0);">LOAN</strong></h1>
                </div><!-- End Section Title -->
                <div class="container" data-aos="fade-up" data-aos-delay="100">
                    <div class="table-responsive-sm">
           <table style="border: solid black 2px;">
                <thead>
                  <tr class="table-dark" style="background-color:rgb(10, 10, 10); color: antiquewhite; font-size: 20px;">
                    <th scope="col" colspan="7" style="text-align: center; color: antiquewhite;">Loan Interest Rates (w.e.f
                      01.06.2025)</th>
                  </tr>
                </thead>
                <style>
                .add {
                    background-color : rgb(254, 231, 255);
                }

                .even {
                        background-color:rgb(255, 255, 255);
                 }
                     table, th, td {
                        border: 0.5px solid rgb(3, 3, 3);
                        color: black;
                        }
                </style>
                <tbody>
                  <tr class="add"  class="text-white">
                    <td colspan="" class="text-center"> <b>SL.NO</b></td>
                    <td colspan="" class="text-center"> <b>TITLE</b></td>
                    <!-- <td></td> -->
                    <!-- <td></td> -->
                    <td class="text-center"><b>INTEREST ON 01.06.2025</b></td>
                  </tr>

                  <tr class="even" >
                    <td class="text-center">01</td>
                    <td>Purpose</td>
                    <td>Vehicle Purchase (Non commercials & Commercial)</td>
                  </tr>
                  <tr class="even" >
                    <td class="text-center">02</td>
                    <td>Eligibility</td>
                    <td>Salaried Employees with 10% of net salary to the Gross Salary & Business Persons</td>
                  </tr>
                  <tr class="text-white add" >
                    <td class="text-center">03</td>
                    <td>Loan Limit</td>
                    <td>Maximum of 70% of vehical on road cost</td>
                  </tr>
                   <tr class="text-white add" >
                    <td class="text-center">04</td>
                    <td>Rate of Interest</td>
                    <td>
                    <table style="color: antiquewhite;">
                        <tr>
                          <td>A)Vehicle Loan Four Wheelar</td>
                          <td>Maximum of 70% of vehical on road cost</td>
                          <td>10.00% (60 installement) </td>
                        </tr>
                        <tr>
                          <td>B)Vehicle Loan Four Wheelar</td>
                          <td>Maximum of 70% of vehical on road cost</td>
                          <td>11.00% (NON-EMI for 5 years) </td>
                        </tr>
                          <tr>
                          <td>C)Vehicle Loan Two Wheelar</td>
                          <td>Maximum of 70% of vehical on road cost</td>
                          <td>12.00% (EMI 36 installement)  </td>
                        </tr>
                          <tr>
                          <td>D)Vehicle Loan Two Wheelar</td>
                          <td>Maximum of 70% of vehical on road cost</td>
                          <td>13.00% (NON-EMI for 3 Years)   </td>
                        </tr>
                      </table> 
                    
                    </td>
                  </tr>
                  <tr class="even" >
                    <td class="text-center">05</td>
                    <td>Repayment Period</td>
                    <td>Repayable in 36/60  EMI </td>
                  </tr>
                  <tr class="text-white add" >
                    <td class="text-center">06</td>
                    <td>Security</td>
                    <td> </td>
                  </tr>
                  <tr class="text-white add" >
                    <td class="text-center">07</td>
                    <td>Purpose Proof</td>
                    <td>Valid Vehicle quotation from Authorized dealers</td>
                  </tr>
                     <tr class="even" >
                    <td class="text-center">08</td>
                    <td>Documentation</td>
                    <td>Prescribed Application Form with Attested Copies of Photo ID – Voter ID/DrivLicense/Passport/Aadhar PAN Card</td>
                  </tr>
                </tbody>
              </table>
                    </div>
                </div>
                </section><!-- /Team Section -->
                </main>
                        `;
            break;

        case 'medium_term_loan':
            contentDiv.innerHTML = `              
                    <div class="container001">
                        <img src="assets/img/page-top-images/Demand_loan3 (2).jpg" alt="Snow" style="width:100%;">
                        <div class="centered text-white">
                        <h1 style="font-size:clamp(14px, 4vw, 40px);color:rgb(5, 8, 177);">MEDIUM TERM LOAN</h1>
                        <p style="font-size:clamp(14px, 4vw, 15px);color:rgb(6, 28, 224)">Home / LOAN</p>
                        </div>
                    </div>
    
                    <main>
                    <!-- Team Section -->
                    <section id="team" class="team section">
    
                    <!-- Section Title -->
                    <div class="container section-title" data-aos="fade-up">
                        <!-- <h2>Gold-loan</h2> -->
                        <h1 class="" style="text-shadow: 0px 5px rgb(187, 195, 196);"><span style="color: black;">MEDIUM TERM </span><strong style="color: rgb(255, 0, 0);">LOAN</strong></h1>
    
                        <!-- <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> -->
                    </div><!-- End Section Title -->
    
                    <div class="container" data-aos="fade-up" data-aos-delay="100">
    
                        <div class="table-responsive-sm">
                   <table style="border: solid black 2px;">
                    <thead>
                      <tr class="table-dark" style="background-color:rgb(10, 10, 10); color: antiquewhite; font-size: 20px;">
                        <th scope="col" colspan="7" style="text-align: center; color: antiquewhite;">Loan Interest Rates (w.e.f
                          01.06.2025)</th>
                      </tr>
                    </thead>
                    <style>
                    .add {
                        background-color : rgb(254, 231, 255);
                    }
    
                    .even {
                            background-color:rgb(255, 255, 255);
                     }
                         table, th, td {
                            border: 0.5px solid rgb(3, 3, 3);
                            color: black;
                            }
                    </style>
                    <tbody>
                      <tr class="add"  class="text-white">
                        <td colspan="" class="text-center"> <b>SL.NO</b></td>
                        <td colspan="" class="text-center"> <b>TITLE</b></td>
                        <!-- <td></td> -->
                        <!-- <td></td> -->
                        <td class="text-center"><b>INTEREST ON 01.06.2025</b></td>
                      </tr>
    
                      <tr class="even" >
                        <td class="text-center">01</td>
                        <td>Purpose</td>
                        <td>Businesss /Over Draft</td>
                      </tr>

                         <tr class="text-white add" >
                        <td class="text-center">02</td>
                        <td>Loan Limit</td>
                        <td>Rs.7500000/-(Seventy Five lakhs) Maximum</td>
    
                      </tr>

                       <tr class="even" >
                        <td class="text-center">03</td>
                        <td>Eligibility</td>
                        <td>A Khatha B Khatha,Four District Limit, <br>
                                     Salaried Employees / Businessmen/Professionals and Individuals with proven source of Income</td>
                      </tr>
    
                      <tr class="text-white add" >
                        <td class="text-center">04</td>
                        <td>Rate of Interest</td>
                        <td>
                        <table style="color: antiquewhite;">
                            <tr>
                              <td>For Business Improvement</td>
                              <td>Upto Rs.75 Lakhs</td>
                              <td> 10%</td>
                            </tr>
                              <tr>
                              <td>For Cash Credit</td>
                              <td>Upto Rs.75 Lakhs</td>
                              <td> 11.50% </td>
                            </tr>
    
                         
    
                          </table> 
                        
                        </td>
                      </tr>
    
                    
    
                     
                   
                      <tr class="even" >
                        <td class="text-center">05</td>
                        <td>Repayment Period</td>
                        <td>Repayable in 180  EMI <br>
                            Cash Credit  for 12 months</td>
                      </tr>
    
                      <tr class="text-white add" >
                        <td class="text-center">06</td>
                        <td>Security</td>
                        <td>Mortgage of the Property by way of Registered Memorandum of Deposit of Title deeds</td>
                      </tr>
    
                      <tr class=" even">
                        <td class="text-center">07</td>
                        <td>Share Holding</td>
                        <td>2.5% of the Loan amount as per RBI notification</td>
                      </tr>
    
    
                      <tr class="text-white add" >
                        <td class="text-center">08</td>
                        <td>Purpose Proof</td>
                        <td>GST latest files copy<br>
                        food license in case of hotel industry
                        </td>
                      </tr>
    
                    <tr class="even" >
                        <td class="text-center">09</td>
                        <td>Documentation</td>
                        <td>Prescribed Application Form with Attested Copies of Photo ID – Voter ID/DrivLicense/Passport/Aadhar PAN Card<br>
                                Income Proof - Salaried <br>
                                Certified Salary Certificate/ Copy of Passbook 3 years IT Returns <br>
                                Business/Professionals <br>
                                3 years IT Returns, with Tax paid challan Professionals/ Bank pass book/statement<br>
                                Self employed<br>
                                1. Consent declaration from family members wherever applicable.<br>
                                2. Income proof as above of family members wherever applicable.</td>
                      </tr>
    
                 
    
                    </tbody>
                  </table>
    
                        </div>
                    </div>
                    </section><!-- /Team Section -->
                    </main>
                            `;
            break;

        case 'demand_loan':
            contentDiv.innerHTML = `              
                        <div class="container001">
                            <img src="assets/img/page-top-images/Demand_loan5.jpg" alt="Snow" style="width:100%;">
                            <div class="centered text-white">
                            <h1 style="font-size:clamp(14px, 4vw, 40px);color:rgb(255, 14, 14);">DEMAND LOAN</h1>
                            <p style="font-size:clamp(14px, 4vw, 15px);color:rgb(255, 0, 0)">Home / LOAN</p>
                            </div>
                        </div>
        
                        <main>
                        <!-- Team Section -->
                        <section id="team" class="team section">
                        <div class="container section-title" data-aos="fade-up">
                            <h1 class="" style="text-shadow: 0px 5px rgb(187, 195, 196);"><span style="color: black;">DEMAND </span><strong style="color: rgb(255, 0, 0);">LOAN</strong></h1>
                                </div><!-- End Section Title -->
                        <div class="container" data-aos="fade-up" data-aos-delay="100">
                            <div class="table-responsive-sm">
                       <table style="border: solid black 2px;">
                        <thead>
                          <tr class="table-dark" style="background-color:rgb(10, 10, 10); color: antiquewhite; font-size: 20px;">
                            <th scope="col" colspan="7" style="text-align: center; color: antiquewhite;">Loan Interest Rates (w.e.f
                              01.06.2025)</th>
                          </tr>
                        </thead>
                        <style>
                        .add {
                            background-color : rgb(254, 231, 255);
                        }
        
                        .even {
                                background-color:rgb(255, 255, 255);
                         }
                             table, th, td {
                                border: 0.5px solid rgb(3, 3, 3);
                                color: black;
                                }
                        </style>
                        <tbody>
                          <tr class="add"  class="text-white">
                            <td colspan="" class="text-center"> <b>SL.NO</b></td>
                            <td colspan="" class="text-center"> <b>TITLE</b></td>
                            <!-- <td></td> -->
                            <!-- <td></td> -->
                            <td class="text-center"><b>INTEREST ON 01.06.2025</b></td>
                          </tr>
                          <tr class="even" >
                            <td class="text-center">01</td>
                            <td>Purpose</td>
                            <td>Businesss /Over Draft</td>
                          </tr>
                            <tr class="even" >
                            <td class="text-center">02</td>
                            <td>Eligibility</td>
                            <td>Deposit in the bank <br>
                                Salaried Employees / Businessmen/Professionals and Individuals with proven source of Income</td>
                          </tr>
                          <tr class="text-white add" >
                            <td class="text-center">03</td>
                            <td>Loan Limit</td>
                            <td>75% of Deposit</td>
                          </tr>
                          <tr class="text-white add" >
                            <td class="text-center">04</td>
                            <td>Rate of Interest</td>
                            <td>
                            <table style="color: antiquewhite;">
                                <tr>
                                  <td>Personal Loan</td>
                                  <td>75% of deposit</td>
                                  <td> 2% additional to the Deposit Interest Rate</td>
                                </tr>
                              </table> 
                            </td>
                          </tr>
                          <tr class="even" >
                            <td class="text-center">05</td>
                            <td>Repayment Period</td>
                            <td>Repayable in 180  EMI <br>
                                Cash Credit  for 12 months</td>
                          </tr>
        
                          <tr class="text-white add" >
                            <td class="text-center">06</td>
                            <td>Security</td>
                            <td>Mortgage of the Property by way of Registered Memorandum of Deposit of Title deeds</td>
                          </tr>
        
                          <tr class=" even">
                            <td class="text-center">07</td>
                            <td>Share Holding</td>
                            <td>2.5% of the Loan amount as per RBI notification</td>
                          </tr>
        
        
                          <tr class="text-white add" >
                            <td class="text-center">08</td>
                            <td>Purpose Proof</td>
                            <td>GST latest files copy<br>
                            food license in case of hotel industry
                            </td>
                          </tr>
        
                        <tr class="even" >
                            <td class="text-center">09</td>
                            <td>Documentation</td>
                            <td>Prescribed Application Form with Attested Copies of Photo ID – Voter ID/DrivLicense/Passport/Aadhar PAN Card <br>
                                Income Proof - Salaried<br>
                                Certified Salary Certificate/ Copy of Passbook 3 years IT Returns<br>
                                Business/Professionals<br>
                                3 years IT Returns, with Tax paid challan Professionals/ Bank pass book/statement
                                Self employed<br>
                                1. Consent declaration from family members wherever applicable.<br>
                                2. Income proof as above of family members wherever applicable.</td>
                          </tr>

                        </tbody>
                      </table>
        
                            </div>
                        </div>
                        </section><!-- /Team Section -->
                        </main>
                                `;
            break;

        case 'gold_loan':
            contentDiv.innerHTML = `              
                    <div class="container001">
                        <img src="assets/img/page-top-images/Goldloan2.jpg" alt="Snow" style="width:100%;">
                        <div class="centered text-white">
                        <h1 style="font-size:clamp(14px, 4vw, 40px);color:rgb(5, 8, 177);">GOLD LOAN</h1>
                        <p style="font-size:clamp(14px, 4vw, 15px);color:rgb(6, 28, 224)">Home / LOAN</p>
                        </div>
                    </div>
    
                   
                           
                     
                            <section id="services" class="services">
                            <div class="container">
                                <div class="section-title">
                                <!-- <h2>/ATM</h2> -->
                                <h1 class="" style="text-shadow: 0px 5px rgb(187, 195, 196);"><span style="color: black;">GOLD </span><strong style="color:rgb(254, 0, 0);">LOAN</strong></h1>
    
                                </div>
                                <div class="container">
                                <div class="row" >
                                    <div class="col text-left">
                                    <div class=" text-center">
                                       
                                    </div>
                                    <p><i class="fa fa-chevron-circle-right" aria-hidden="true" style="color: rgb(38, 0, 255);"></i> Instant loan against pledge of Gold Ornaments.</p>
                                    <p><i class="fa fa-chevron-circle-right" aria-hidden="true" style="color: rgb(38, 0, 255);"></i> Upto Rs.4000/- per Gram as appraised by the Bank.</p>
                                    <p><i class="fa fa-chevron-circle-right" aria-hidden="true" style="color: rgb(38, 0, 255);></i> Rate of Interest: <br><br> A) UPTO Rs.2 Lakhs 9.00%
                                       <br> B) Rs.2 Lakhs to Rs.5 Lakhs 9.00%</p>
                                    <p><i class="fa fa-chevron-circle-right" aria-hidden="true" style="color: rgb(38, 0, 255);"></i> Bullet Loans upto Rs. 2 lakhs repayable in 12 months.</p>
                                    <p><i class="fa fa-chevron-circle-right" aria-hidden="true" style="color: rgb(38, 0, 255);"></i> Loan above Rs.2 lakhs repayable in 12 instalments (EMI/Over Draft).</p>

                                    </div>
                                    <div class="col-md-auto ">
                                    <img src="assets/img/Gold_loan1.jpg" width="380px" />
                                    </div>
                                </div>
                                
                                </div>
                            </div>
                            </section>
                     
                    

                    
                            `;
            break;

        case 'deposit':
            contentDiv.innerHTML = `
                       <div class="container001">
                            <img src="assets/img/page-top-images/Depositpage.jpg" alt="Snow" style="width:100%;">
                            <div class="centered text-white">
                            <h1 style="font-size:clamp(14px, 4vw, 40px);color:blue;">DEPOSIT</h1>
                            <p style="font-size:clamp(14px, 4vw, 15px);color:blue;">Home / DEPOSIT</p>
                            </div>
                        </div>
                        
                        <main>
                            <!-- Team Section -->
                            <section id="team" class="team section">

                            <!-- Section Title -->
                            <div class="container section-title mb-1" data-aos="fade-up" style="margin-bottom: -100px;">
                                     <h1 class="" style="text-shadow: 0px 5px rgb(187, 195, 196);"><span
                                    style="color: rgb(212, 38, 38);"></span><strong style="color:red;">DEPOSIT</strong></h1>
                                </div><!-- End Section Title -->
                                <br>
                                   <br>
                                   

                            <div class="container" data-aos="fade-up" data-aos-delay="100">

                                <div class="row gy-5">


                        <section class="section" style="background-color:rgb(255, 255, 255);">
                            <div class="column" style="border: solid rgb(255, 0, 0) 2px;">
                             <div class="card-container">
                                    <div class="card" style="color:rgb(255, 255, 255);">
                                        <div class="card-face front">
                                        <img src="assets/img/Recurring-Deposit.jpg" alt="Image 1">
                                        </div>
                                        <div class="card-face back">
                                        <h2 style="color:rgb(255, 255, 255);">SAVINGS DEPOSIT</h2>
                                        </div>
                                    </div>
                                </div>                               
                                <div class="address">
                                    <h2 style="color:rgb(255, 9, 9);">SAVINGS DEPOSIT</h2>
                                      <p>
                                      ⤑ Minimum Balance Rs.500/- to be maintained.<br><br>

                                        ⤑ Interest at 3.0% P.A on daily balance will be credited half yearly.<br><br>

                                        ⤑ Any Branch Banking facility available.<br><br>

                                        ⤑ CTS cheque facility available<br><br>

                                        ⤑ Direct member of clearing house <br><br>

                                        ⤑ Personalized cheque book facility is available across all the branches.
                                      </p>
                                </div>                                                              
                            </div>
                           <div class="column" style="border: solid rgb(255, 0, 0) 2px;">
                               
                               <div class="card-container">
                                    <div class="card">
                                        <div class="card-face front">
                                        <img src="assets/img/Current-deposit1.jpg" alt="Image 1">
                                        </div>
                                        <div class="card-face back">
                                        <h2 style="color:rgb(255, 255, 255);">CURRENT DEPOSIT</h2>
                                        </div>
                                    </div>
                                </div>

                                
                                <div class="address">
                                        <h2 style="color:rgb(255, 0, 0);">CURRENT DEPOSIT</h2>
                                      <p>
                                      ⤑ Convenient for Individual/Traders/Businessmen/Firms and Companies<br><br>

                                        ⤑ Minimum Rs.1000/- Balance required to be maintained<br><br>

                                        ⤑ Direct member of clearing house<br><br>

                                        ⤑ CTS cheque facility available<br><br>

                                        ⤑ Cheques deposited for clearing before 12 Noon will be credited next day evening on full working day as per NPCI rules
                                      </p>
                                </div>
                                
                               
                            </div>
                             <div class="column" style="border: solid rgb(255, 0, 0) 2px;">
                               
                               <div class="card-container">
                                    <div class="card">
                                        <div class="card-face front">
                                        <img src="assets/img/Gold loan1.jpg" alt="Image 1">
                                        </div>
                                        <div class="card-face back">
                                        <h2 style="color:rgb(255, 255, 255);">RECURRING DEPOSIT-MONTHLY</h2>
                                        </div>
                                    </div>
                                </div>

                                
                                <div class="address">
                                 <h2 style="color:rgb(255, 0, 0);">RECURRING DEPOSIT-MONTHLY</h2>
                                      <p>
                                    ⤑ Investor can deposit monthly a fixed amount in an account for a fixed period on monthly basis.<br><br>

                                      ⤑ Interest for 1 year is 7% and above 2 years 8%<br><br>

                                        ⤑ Interest will be credited quarterly rests<br><br>

                                        ⤑ Accounts can be opened by Individuals, firms, trusts, HUF etc<br><br>

                                        ⤑ Loan facility available <br><br>

                                        ⤑ Nomination facility available
                                      </p>
                                </div>
                                
                               
                            </div>

                            <div class="column" style="border: solid rgb(255, 0, 0) 2px;">
                               
                               <div class="card-container">
                                    <div class="card">
                                        <div class="card-face front">
                                        <img src="assets/img/Pigmy_small.jpg" alt="Image 1">
                                        </div>
                                        <div class="card-face back">
                                        <h2 style="color:rgb(255, 255, 255);">PIGMY DEPOSIT</h2>
                                        </div>
                                    </div>
                                </div>

                                
                                <div class="address">
                                <h2 style="color:rgb(255, 0, 0);">PIGMY DEPOSIT</h2>
                                      <p>
                                      ⤑ Convenient for Individual/Traders/Businessmen/Firms and Companies<br><br>

                                        ⤑ Minimum Rs.1000/- Balance required to be maintained<br><br>

                                        ⤑ Direct member of clearing house<br><br>

                                        ⤑ CTS cheque facility available<br><br>

                                        ⤑ Cheques deposited for clearing before 12 Noon will be credited next day evening on full working day as per NPCI rules
                                      </p>
                                </div>
                                
                               
                            </div>
                        </section>  



                         
                        
                            <hr style="height:2px;border-width:0;color:black;background-color:black;width:50%;margin:auto">
                          
                        

                          <!-- ======= Services Section ======= -->
                                <section id="services" class="services">
                                    <div class="container">
                                   
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-12">
                                        <div class="table-responsive">

                                            <table style="border: solid black 2px;">
                                            <thead>
                                                <tr class="table-dark"
                                                style="background-color:  #030303; color: antiquewhite; font-size: 20px;">
                                                <th scope="col" colspan="7" style="text-align: center;">Bhagyalaxmi Deposit Interest Rates  (Compound Interest) (w.e.f 01.12.2024)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <style>
                                                td {
                                                    text-align: center;
                                                    }
                                            </style>
                                                <tr style="background-color: #104E8B;" class="text-white">
                                                <!-- <td></td> -->
                                                <td colspan="5" class="text-center"> <b>Period</b></td>
                                                <!-- <td></td> -->
                                                <!-- <td></td> -->
                                                <td><b>General</b></td>
                                                
                                                </tr>
                                                <tr class="text-center" style="background-color: #b4d4f5;">
                                                <td>above</td>
                                                <td class="text-center">1</td>
                                                <td class="text-center">year</td>
                                                <td class="text-center">to</td>
                                                <td>below 13 months</td>
                                                <td class="text-center">7.50%</td>
                                                
                                                </tr>
                                                <tr class="text-white" style="background-color: #104E8B;">
                                                <td>above</td>
                                                <td>13</td>
                                                <td>months</td>
                                                <td>to</td>
                                                <td>below  3 years</td>
                                                <td>8.00%</td>
                                               
                                                </tr>
                                                <tr class="" style="background-color: #b4d4f5;">
                                                <td>above</td>
                                                <td>3</td>
                                                <td>years</td>
                                                <td>to</td>
                                                <td>above</td>
                                                <td>7.50%</td>
                                               
                                               
                                            </tbody>
                                            </table>

                                        </div>
                                       
                                        </div><!-- end col -->
                                    </div>
                                    </div>
                                </section><!-- End Services Section -->


                         


                                
                                <!-- ======= Services Section ======= -->
                                <section id="services" class="services">
                                    <div class="container">
                                   
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-12">
                                        <div class="table-responsive">

                                            <table style="border: solid black 2px;">
                                            <thead>
                                                <tr class="table-dark"
                                                style="background-color:  #030303; color: antiquewhite; font-size: 20px;">
                                                <th scope="col" colspan="7" style="text-align: center;">Deposit Interest Rates (w.e.f
                                                    01.07.2024)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr style="background-color: #104E8B;" class="text-white">
                                                <!-- <td></td> -->
                                                <td colspan="5" class="text-center"> <b>Period</b></td>
                                                <!-- <td></td> -->
                                                <!-- <td></td> -->
                                                <td><b>General</b></td>
                                                
                                                </tr>
                                                <tr class="" style="background-color: #b4d4f5;">
                                                <td></td>
                                                <td>45</td>
                                                <td>days</td>
                                                <td>to</td>
                                                <td>90 days</td>
                                                <td>4.50%</td>
                                                
                                                </tr>
                                                <tr class="text-white" style="background-color: #104E8B;">
                                                <td></td>
                                                <td>91</td>
                                                <td>days</td>
                                                <td>to</td>
                                                <td>180 days</td>
                                                <td>6.00%</td>
                                               
                                                </tr>
                                                <tr class="" style="background-color: #b4d4f5;">
                                                <td></td>
                                                <td>181</td>
                                                <td>days</td>
                                                <td>to</td>
                                                <td>364 days</td>
                                                <td>6.50%</td>
                                               
                                                </tr>
                                                <tr class="text-white" style="background-color: #104E8B;">
                                                <td>above</td>
                                                <td>1</td>
                                                <td>year</td>
                                                <td>to</td>
                                                <td>below 13 months</td>
                                                <td>7.50%</td>
                                              
                                                </tr>
                                                <tr class="" style="background-color: #b4d4f5;">
                                                <td>above</td>
                                                <td>13</td>
                                                <td>months</td>
                                                <td>to</td>
                                                <td>below  3 years</td>
                                                <td>8.00%</td>
                                               
                                                </tr>
                                                <tr class="text-white" style="background-color: #104E8B;">
                                                <td>above</td>
                                                <td>3</td>
                                                <td>years</td>
                                                <td>to</td>
                                                <td>above</td>
                                                <td>7.50%</td>
                                               

                                                </tr>
                                            </tbody>
                                            </table>

                                        </div>
                                        <h5>
                                            <p style="background-color: rgb(7, 7, 7);text-align: center; height: 10%; color: white;font-size:20px;"><b>
                                            For Senior citizens 0.5% p.a. additional interest for above 1 year deposits only. Monthly interest will be paid in full.</b> </p>
                                        </h5>
                                        </div><!-- end col -->
                                    </div>
                                    </div>
                                </section><!-- End Services Section -->
                                </div>

                            </div>

                            </section><!-- /Team Section -->
                        </main>

                        `;
            break;

        case 'branch':
            contentDiv.innerHTML = `
                            <div class="container001">
                                    <img src="assets/images/Branches1upd.jpg" alt="Snow" style="width:100%;">
                                    <div class="centered text-white">
                                        <h1 style="font-size:clamp(14px, 4vw, 40px);color:white;">BRANCHES</h1>
                                        <p style="font-size:clamp(14px, 4vw, 15px);color:white;">Home / BRANCHES</p>
                                    </div>
                                </div>

                                <main>
                                    <!-- Pricing Section -->
                                    <section id="pricing" class="pricing section">
                                        <!-- Section Title -->
                                        <div class="container section-title" data-aos="fade-up">
                                            <!-- <h2>Our Branches</h2> -->
                                            <h1 class="" style="text-shadow: 0px 5px rgb(187, 195, 196);"><span style="color: black;">OUR
                                                </span><strong style="color:rgb(255, 0, 0); ">BRANCHES</strong></h1>
                                        </div><!-- End Section Title -->
                                        <section class="section" style="background-color:rgb(252, 217, 221);">
                                            <div class="column" style="border: solid rgb(255, 9, 1) 2px;">
                                                <div class="card-container">
                                                    <div class="card">
                                                        <div class="card-face front">
                                                            <img src="assets/images/main.png" alt="Image 1">
                                                        </div>
                                                        <div class="card-face back">
                                                            <p>Janata Co-operative Bank Limited,<br>
                                                                01, Gokak Road, Harugeri<br>
                                                                Belagavi, Karnataka - 591220.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="map-container">
                                                    <!-- Google Maps Embed -->
                                                    <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1124.396413697502!2d74.94917768011774!3d16.51654686147832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0cd3c775bec95%3A0xe6ce28eccbe2df08!2sJanata%20Co-operative%20Bank%20Ltd.!5e1!3m2!1sen!2sin!4v1749119313117!5m2!1sen!2sin"
                                                        style="border:0;width:100%;height:100%;" allowfullscreen="" loading="lazy"></iframe>
                                                </div>
                                                <div class="address">
                                                    <p>Janata Co-operative Bank Limited,<br>
                                                        01, Gokak Road, Harugeri<br>
                                                        Belagavi, Karnataka - 591220.</p>
                                                </div>
                                            </div>
                                            <div class="column" style="border: solid rgb(255, 0, 0) 2px;">

                                                <div class="card-container">
                                                    <div class="card">
                                                        <div class="card-face front">
                                                            <img src="assets/images/ugara.png" alt="Image 1">
                                                        </div>
                                                        <div class="card-face back">
                                                            <p>
                                                                UGAR KHURD BRANCH<br>
                                                                NEAR POST OFFICE,<br>
                                                                MAIN ROAD UGAR KHURD-591316,<br>
                                                                TAL: KAGAWAD DIST BELAGAVI, KARNATAKA
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="map-container">
                                                    <!-- Google Maps Embed -->
                                                    <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4494.273978826587!2d74.8189615757359!3d16.658230323399785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0d7002fa2d3cd%3A0x4f371b5b60ef39bd!2sJanata%20Co-operative%20Bank%20Ltd.!5e1!3m2!1sen!2sin!4v1749119798238!5m2!1sen!2sin"
                                                        style="border:0;width:100%;height:100%;" allowfullscreen="" loading="lazy"></iframe>
                                                </div>
                                                <div class="address">
                                                    <p>
                                                        <h5><b>UGAR KHURD BRANCH</b></h5>
                                                        NEAR POST OFFICE,<br>
                                                        MAIN ROAD UGAR KHURD-591316,<br>
                                                        TAL: KAGAWAD DIST BELAGAVI, KARNATAKA
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="column" style="border: solid rgb(255, 0, 0) 2px;">
                                                <div class="card-container">
                                                    <div class="card">
                                                        <div class="card-face front">
                                                            <img src="assets/images/mani.png" alt="Image 1">
                                                        </div>
                                                        <div class="card-face back">
                                                            <p>
                                                                RAIBAG BRANCH <br>
                                                                TMC NO 2100,<br>
                                                                PLOT NO 2, GADDE PLOT, <br>
                                                                KEB ROAD, RAIBAG-59137, DIST BELAGAVI, KARNATAKA
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="map-container">
                                                    <!-- Google Maps Embed -->
                                                    <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4498.124953724156!2d74.76907587573345!3d16.49336202794279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0c5791283f335%3A0x2f2615b728badd89!2sJanata%20Co-operative%20Bank%20Ltd.!5e1!3m2!1sen!2sin!4v1749119879819!5m2!1sen!2sin"
                                                        style="border:0;width:100%;height:100%;" allowfullscreen="" loading="lazy"></iframe>
                                                </div>
                                                <div class="address">
                                                    <p>
                                                        
                                                         <h5><b>RAIBAG BRANCH </b></h5>
                                                    
                                                        TMC NO 2100,<br>
                                                        PLOT NO 2, GADDE PLOT, <br>
                                                        KEB ROAD, RAIBAG-59137, DIST BELAGAVI, KARNATAKA
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="column" style="border: solid rgb(255, 0, 0) 2px;">
                                                <div class="card-container">
                                                    <div class="card">
                                                        <div class="card-face front">
                                                            <img src="assets/images/athani.png" alt="Image 1">
                                                        </div>
                                                        <div class="card-face back">
                                                            <p>
                                                                ATHANI BRANCH<br>
                                                                KARNATAKA HOTEL,<br>
                                                                OPPOSITE POLICE STATION , <br>
                                                                MAIN ROAD, ATHANI, DIST:BELAGAVI KARNATAKA
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="map-container">
                                                    <!-- Google Maps Embed -->
                                                    <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4492.660245771604!2d75.05796647573688!3d16.72684802149665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc72a1d5a82ffb3%3A0x9f6d7fccb90a5454!2sJANATA%20CO%20OP%20BANK%20LTD%20HARUGERI%20BR%20ATHANI!5e1!3m2!1sen!2sin!4v1749119974876!5m2!1sen!2sin"
                                                        style="border:0;width:100%;height:100%;" allowfullscreen="" loading="lazy"></iframe>
                                                </div>
                                                <div class="address">
                                                    <p>
                                                       <h5><b> ATHANI BRANCH</b></h5>
                                                        KARNATAKA HOTEL,<br>
                                                        OPPOSITE POLICE STATION , <br>
                                                        MAIN ROAD, ATHANI, DIST:BELAGAVI KARNATAKA
                                                    </p>
                                                </div>
                                            </div>
                                        </section>
                                    </section>
                                </main>

                        `;
            break;

        case 'gallery':
            contentDiv.innerHTML = `
                 <div class="container001">
                        <img src="assets/img/page-top-images/gallary.png" alt="Snow" style="width:100%;">
                        <div class="centered text-white">
                        <h1 style="font-size:clamp(14px, 4vw, 40px);color:rgb(255, 0, 0);">Gallery</h1>
                        <p style="font-size:clamp(14px, 4vw, 15px);color:rgb(255, 0, 0)">Home / Gallery</p>
                        </div>
                    </div>
                    <main>
                    <section id="portfolio" class="portfolio section">
                        <div class="container section-title" data-aos="fade-up">
                            <h1 class="" style="text-shadow: 0px 5px rgb(187, 195, 196);"><span style="color: black;">OUR </span><strong style="color:rgb(254, 0, 0);">GALLERY</strong></h1>
                            </div>
                            <div class="container-fluid">
                            <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                                <div class="row justify-content-md-center">
                                    <div class=" col-md-auto">
                                    <img src="assets/img/gallery/lamp_fire.jpg" class="img-fluid" alt="" width="400px">
                                    </div>

                                    <div class="col-md-auto">
                                    <img src="assets/img/gallery/meeting.jpg" class="img-fluid" width="400px" alt="">
                                    </div>

                                    <div class="col-md-auto">
                                    <img src="assets/img/gallery/lamp_fire.jpg" class="img-fluid" width="400px" alt="">
                                    </div>
                                </div>
                            </div>
                          </div>  
                        </div>
                    </section>
                    </main>
                `;
            break;

        case 'contact':
            contentDiv.innerHTML = `
                                    <div class="container001">
                                            <img src="assets/img/page-top-images/contact-banner.jpg" alt="Snow" style="width:100%;">
                                            <div class="centered text-white">
                                            </div>
                                        </div>

                                       <section id="contact" class="contact section">
  <div class="container">
    <div class="section-title text-center" data-aos="fade-up">
      <h1 style="text-shadow: 0px 5px rgb(187, 196, 196);">
        <span style="color: black;">CONTACT </span>
        <strong style="color:rgb(254, 0, 0)">US</strong>
      </h1>
    </div>

    <div class="row g-4">
      <!-- Left Column: Contact Info -->
      <div class="col-md-6">
        <div class="info-card">
          <p><i class="fas fa-map-marker-alt"></i><strong>Address:</strong><br>
            Hanamasagar Urban Co-Operative Bank Ltd,<br>
            College Road, APMC Yard<br>
            Hanamasagar-583 281,<br>
            Tq-Kushtagi, Dist- Koppal, Karnataka
          </p>
        </div>

        <div class="info-card">
          <p><i class="fas fa-phone-alt"></i><strong>Phone:</strong> 9742116311</p>
          <p><i class="fas fa-fax"></i><strong>Fax:</strong> 08536 - 270231</p>
        </div>

        <div class="info-card">
          <p><i class="fas fa-envelope"></i><strong>Email:</strong> banking@hucobank.com</p>
        </div>

        <div class="info-card">
          <p><i class="fas fa-clock"></i><strong>Bank Timings:</strong><br>
            Mon–Fri: 10:00 AM – 4:00 PM<br>
            Sat: 10:00 AM – 2:00 PM<br>
            Sun: Closed
          </p>
        </div>
      </div>

      <!-- Right Column: Google Map -->
      <div class="col-md-6">
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1234567890123!2d75.700123456!3d16.830123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc6bc1234567890%3A0x123456789abcdef!2sBijapur!5e0!3m2!1sen!2sin!4v1711234567890"
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            class="gmap-frame"></iframe>
        </div>
      </div>
    </div>
  </div>

  <style>
    .info-card {
      background: #fff;
      border-radius: 15px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
    }

    .info-card i {
      font-size: 18px;
      margin-right: 10px;
      color: #6f00ff;
    }

    .map-container {
      height: 100%;
    }

    .gmap-frame {
      width: 100%;
      height: 100%;
      min-height: 450px;
      border: none;
      border-radius: 15px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
    }

    @media (max-width: 768px) {
      .gmap-frame {
        min-height: 300px;
      }
    }
  </style>
</section>
                                    

                 `;
            break;

        default:
            contentDiv.innerHTML = '<h2>Page not found!</h2>';
    }
}
