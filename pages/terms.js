"use client";

import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export default function TermsAndConditions() {
    return (
        <div className="bg-white text-gray-800 min-h-screen">
            <Header />

            <Head>
                <title>Terms & Conditions | Belly Buds </title>
                <meta
                    name="description"
                    content="Terms & Conditions for Belly Buds . Please read these terms carefully before using our website and services."
                />
            </Head>

            <div className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-6 text-orange-500">Terms & Conditions</h1>
                
                <p className="mb-6 text-lg">
                    <strong>Last Updated: December 2, 2022</strong>
                </p>

                <section className="mb-8">
                    <p className="mb-4">
                        These Terms of Use govern your use of the websites, content and community services offered through Belly Buds  ("Website") and any mobile or internet connected device or otherwise (the "Service").
                    </p>
                    
                    <p className="mb-4">
                        These terms of use ("Terms") constitute a legally binding agreement between you and Belly Buds  ("Company", "we", "our" or "us") regarding your use of the Website and any Services offered by the Company. By accessing the Website or Service and/or by clicking "I agree", you agree to be bound by these Terms.
                    </p>
                    
                    <p className="mb-4">
                        You hereby represent and warrant to the Company that you are at least eighteen (18) years of age or above and are capable of entering, performing and adhering to these Terms. While individuals under the age of 18 may utilize the Services or the Website, they shall do so only with the involvement and guidance of their parents and / or legal guardians, under such parent /legal guardian's registered account.
                    </p>
                    
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                        <p className="font-semibold text-yellow-800">IMPORTANT NOTICE:</p>
                        <p className="text-yellow-700">
                            THESE TERMS CONTAIN A BINDING ARBITRATION AGREEMENT, WAIVER OF A JURY TRIAL, AND INDEMNIFICATION PROVISIONS. READ ALL SECTIONS OF THESE TERMS CAREFULLY AS THE TERMS MAY AFFECT YOUR AND OUR RIGHTS.
                        </p>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mt-6 mb-3">1. Acceptance of Terms</h2>
                    <p className="mb-4">
                        By accessing or using our Services, you acknowledge and agree that all use of the Website and Services is at your sole risk. We may add to or change or update these Terms from time to time entirely at our own discretion. You are responsible for checking these Terms periodically to remain in compliance. Your use of the Website after any amendment to the Terms shall constitute your acceptance of these Terms.
                    </p>
                    
                    <p className="mb-4">
                        We reserve the right to suspend / cancel, or discontinue any or all channels, products or services at any time without notice to you, make modifications and alterations in any or all of the content, products and services contained on the Website without prior notice.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mt-6 mb-3">2. User Registration and Account</h2>
                    <p className="mb-4">
                        You agree to register prior to uploading any content and / or comment and any other use of services of this Website and provide your details including, but not limited to, complete name, age, email address, residential address, contact number.
                    </p>
                    
                    <h3 className="text-xl font-medium mt-4 mb-2">2.1 Account Security</h3>
                    <p className="mb-4">
                        You are entirely responsible for maintaining the confidentiality of your password and account. Each registration is for a single individual user only. We do not permit:
                    </p>
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li>Any other person sharing your account and password</li>
                        <li>Any part of the Website being cached in proxy servers and accessed by individuals who have not registered</li>
                        <li>Access through a single account and password being made available to multiple users on a network</li>
                    </ul>
                    
                    <p className="mb-4">
                        If we reasonably believe that an account and password is being misused in any manner, we shall reserve the right to cancel access rights immediately without notice, and block access to all users from that IP address.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mt-6 mb-3">3. Intellectual Property Rights</h2>
                    <p className="mb-4">
                        Unless otherwise stated, copyright and all intellectual property rights in all material presented on the Website (including but not limited to text, audio, video or graphical images), trademarks and logos appearing on this Website are the property of Belly Buds  and are protected under applicable laws.
                    </p>
                    
                    <p className="mb-3">You agree not to:</p>
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li>Use any framing techniques to enclose any trademark or logo or other proprietary information</li>
                        <li>Remove, conceal or obliterate any copyright or other proprietary notice or any credit-line or date-line on other mark or source identifier</li>
                        <li>Copy, modify, create a derivative work from, reverse engineer, or otherwise attempt to discover any source code</li>
                        <li>Sell, assign, sublicense, grant a security interest in, or otherwise transfer any right in or access to the Website</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mt-6 mb-3">4. User Responsibilities and Prohibited Activities</h2>
                    <p className="mb-4">
                        Any use or attempted use of the Services for any unauthorized, fraudulent or malicious purpose is prohibited. In connection with your use of the Website, you agree you will not:
                    </p>
                    
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li>Upload or transmit any content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable</li>
                        <li>Create a false identity for the purpose of misleading others or impersonate any person or entity</li>
                        <li>Upload or transmit any material that you do not have a right to reproduce, display or transmit under any law</li>
                        <li>Upload files that contain viruses, Trojan horses, worms, time bombs, or any other similar software or programs</li>
                        <li>Delete any author attributions, legal notices or proprietary designations or labels</li>
                        <li>Upload or transmit any unsolicited advertising, promotional materials, "junk mail," "spam," or other forms of solicitation</li>
                        <li>Violate any applicable local, state, national or international law</li>
                        <li>Upload or transmit any material that infringes any patent, trademark, copyright or other proprietary rights</li>
                        <li>Delete or revise any material posted by any other person or entity</li>
                        <li>Probe, scan, test the vulnerability of or breach the authentication measures of the Website</li>
                        <li>Harvest or otherwise collect information about others without their consent</li>
                        <li>Use any robot, spider, scraper, or other automated means to access the Website</li>
                    </ul>
                    
                    <p className="mb-4">
                        We reserve the right to monitor the use of the Website and its Services and to take whatever lawful actions we may deem appropriate in response to actual or suspected violations, including suspension or termination of a user's access and/or account.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mt-6 mb-3">5. Content Submission and User-Generated Content</h2>
                    <p className="mb-4">
                        All information, data, text, software, music, sound, photographs, graphics, video, messages or other materials (collectively, "Content"), whether publicly or privately transmitted / posted, is the sole responsibility of the person from where such content is originated.
                    </p>
                    
                    <p className="mb-4">
                        By posting any material which contain images, photographs, pictures or that are otherwise graphical in whole or in part ("Images"), you warrant and represent that:
                    </p>
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li>You are the copyright owner of such Images, or that the copyright owner has granted you permission to use such Images</li>
                        <li>You have the rights necessary to grant the licenses described in these Terms</li>
                        <li>Each person depicted in such Images has provided consent to the use of the Images as set forth in these Terms</li>
                    </ul>
                    
                    <p className="mb-4">
                        You agree to grant/assign to us a non-exclusive, royalty free, perpetual, irrevocable and sub-licensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform and display such Content / Images worldwide.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mt-6 mb-3">6. Products, Pricing, and Orders</h2>
                    
                    <h3 className="text-xl font-medium mt-4 mb-2">6.1 Product Information</h3>
                    <p className="mb-4">
                        We strive to provide accurate product information and pricing. However, we do not guarantee that all details are accurate, complete, or current. Prices are subject to change without notice.
                    </p>
                    
                    <h3 className="text-xl font-medium mt-4 mb-2">6.2 Pricing and Taxes</h3>
                    <p className="mb-4">
                        All prices displayed on the Website are in the currency indicated and include applicable taxes unless otherwise stated. We reserve the right to correct any pricing errors on our Website.
                    </p>
                    
                    <h3 className="text-xl font-medium mt-4 mb-2">6.3 Order Acceptance</h3>
                    <p className="mb-4">
                        Your order constitutes an offer to purchase products. Acceptance of your order and the formation of a contract will take place when we send you an email confirming that the products have been dispatched.
                    </p>
                    
                    <h3 className="text-xl font-medium mt-4 mb-2">6.4 Payment</h3>
                    <p className="mb-4">
                        We use third party payment gateway services for receiving payment. By providing payment details, you represent that you are entitled to purchase using those payment details. If we do not receive payment authorization, we may immediately terminate or suspend your order.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mt-6 mb-3">7. Shipping and Delivery</h2>
                    <p className="mb-4">
                        We will endeavor to process your order promptly but do not guarantee delivery by any specified time. Shipping times are estimates and not guaranteed. We are not responsible for delays caused by shipping carriers or other circumstances beyond our control.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mt-6 mb-3">8. Returns and Refunds</h2>
                    <p className="mb-4">
                        Please refer to our separate Return Policy for detailed information about returns, exchanges, and refunds. Certain products may not be eligible for return due to hygiene or safety reasons.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mt-6 mb-3">9. Third-Party Links and Services</h2>
                    <p className="mb-4">
                        Our website may contain links to third-party websites or services. We are not responsible for the content, privacy practices, or accuracy of information on these external sites. When you use third-party services through our Website, you acknowledge and agree to their terms and conditions.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mt-6 mb-3">10. Disclaimer of Warranties</h2>
                    <p className="mb-4">
                        THE INFORMATION, SOFTWARE, CONTENT, AND MATERIALS AVAILABLE FROM OR PROVIDED ON THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OR GUARANTEES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, TITLE, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                    </p>
                    
                    <p className="mb-4">
                        We do not represent, warrant or covenant that the Website, content or any materials, products, or services available on or through the Website are or will be accurate, current, complete, free of errors, reliable, or appropriate for any particular use.
                    </p>
                    
                    <p className="mb-4">
                        We periodically amend, change, adds, deletes, updates, or alters the Website and the Services without notice. We assume no liability or responsibility for any errors or omissions in the content of the Website or the Services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mt-6 mb-3">11. Limitation of Liability</h2>
                    <p className="mb-4">
                        IN NO EVENT SHALL BELLY BUDS , ITS AFFILIATES, OR THEIR RESPECTIVE CONTRACTORS, SUPPLIERS, CONTENT-PROVIDERS, AND OTHER SIMILAR ENTITIES, BE LIABLE TO YOU OR ANY OTHER THIRD PARTY FOR ANY LOSS, COST, DAMAGE, OR OTHER INJURY ARISING OUT OF OR IN CONNECTION WITH:
                    </p>
                    
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li>The use of, or reliance on, the Website, content, materials, and services accessible on or through the Website</li>
                        <li>The use, copying, or display of the Website or the content or the transmission of information to or from the Website</li>
                        <li>Any defamatory, offensive, or illegal conduct by you, other users of the Website, or other third parties</li>
                        <li>Your purchase and use of any goods or services provided by us or any third party</li>
                        <li>The availability, reliability, accuracy, timeliness, or quality of any services</li>
                    </ul>
                    
                    <p className="mb-4">
                        UNDER NO CIRCUMSTANCES SHALL WE BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL, INCIDENTAL, PUNITIVE, SPECIAL, OR SIMILAR DAMAGES OR COSTS INCLUDING, BUT NOT LIMITED TO, LOST PROFITS OR DATA, LOSS OF GOODWILL, LOSS OF OR DAMAGE TO PROPERTY, LOSS OF USE, BUSINESS INTERRUPTION.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mt-6 mb-3">12. Indemnification</h2>
                    <p className="mb-4">
                        YOU AGREE TO INDEMNIFY, DEFEND AND HOLD BELLY BUDS  HARMLESS FROM AND AGAINST ALL CLAIMS, DEMANDS, SUITS OR OTHER PROCEEDINGS, AND ALL RESULTING LOSS, DAMAGE, LIABILITY, COST, AND EXPENSE, BROUGHT BY ANY THIRD PARTY IN CONNECTION WITH OR ARISING OUT OF:
                    </p>
                    
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li>Content, data, or information that you submit, post to, or transmit through the Website</li>
                        <li>Your access to and use of the Website and other materials, products, and services available on or through the Website</li>
                        <li>Your violation of these Terms of Use</li>
                        <li>Your violation of any rights of another</li>
                        <li>Any other inappropriate or unacceptable usage</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mt-6 mb-3">13. Termination</h2>
                    <p className="mb-4">
                        We reserve the right to refuse service, restrict, suspend, terminate your account; terminate these Terms; terminate or suspend your access to the Website; refuse, move or remove for any reason any Content that you submit on or through the Services; deactivate or delete your accounts and all related information and files in your account at any time with or without cause, and with or without any prior notice for any violation of the Terms.
                    </p>
                    
                    <p className="mb-4">
                        You can terminate your account at any time by contacting us, but your information may remain stored in archive on our servers even after the deletion or the termination of your account as required by applicable laws.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mt-6 mb-3">14. Privacy and Data Protection</h2>
                    <p className="mb-4">
                        Our use of personal information is described in our{" "}
                        <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                            Privacy Policy
                        </Link>
                        . By using the website, you consent to our collection and use of information as outlined there. Notwithstanding the foregoing, we reserve the right to disclose any information in response to / that it is required to be shared, disclosed or made available to any governmental, administrative, regulatory or judicial authority under any law or regulation.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mt-6 mb-3">15. Force Majeure</h2>
                    <p className="mb-4">
                        We shall not be liable for any delay or failure to perform due to events beyond its reasonable control, including acts of God, natural disasters, pandemics, strikes, supply chain delays, or governmental actions.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mt-6 mb-3">16. Dispute Resolution and Arbitration</h2>
                    
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
                        <p className="font-semibold text-red-800">ARBITRATION AGREEMENT AND WAIVER OF CERTAIN RIGHTS:</p>
                        <p className="text-red-700">
                            YOU AND BELLY BUDS  AGREE TO ARBITRATE ALL DISPUTES AND CLAIMS BETWEEN US. THIS AGREEMENT TO ARBITRATE IS INTENDED TO BE BROADLY INTERPRETED.
                        </p>
                    </div>
                    
                    <p className="mb-4">
                        <strong>16.1 Arbitration:</strong> Any dispute or claim relating in any way to your use of the Website or any product or service sold or distributed by us will be resolved by binding arbitration rather than in court.
                    </p>
                    
                    <p className="mb-4">
                        <strong>16.2 Waiver of Jury Trial:</strong> YOU AND WE HEREBY WAIVE THE RIGHT TO A TRIAL BY JURY IN ANY ACTION OR PROCEEDING ARISING OUT OF OR RELATING TO THESE TERMS OR THE WEBSITE.
                    </p>
                    
                    <p className="mb-4">
                        <strong>16.3 Class Action Waiver:</strong> EACH PARTY WAIVES THE RIGHT TO LITIGATE IN COURT OR ARBITRATE ANY CLAIM OR DISPUTE AS A CLASS ACTION, EITHER AS A MEMBER OF A CLASS OR AS A REPRESENTATIVE, OR TO ACT AS A PRIVATE ATTORNEY GENERAL.
                    </p>
                    
                    <p className="mb-4">
                        <strong>16.4 Arbitration Procedure:</strong> The arbitration will be conducted by a single arbitrator pursuant to the Consumer Arbitration Rules of the American Arbitration Association. The arbitration shall be held in San Francisco, California, although you may elect telephonic proceedings or waive any hearing.
                    </p>
                    
                    <p className="mb-4">
                        <strong>16.5 Governing Law:</strong> These Terms shall be governed by, and construed and enforced in accordance with, the laws of the State of Delaware, as such laws are applied to agreements entered into and to be performed entirely within such State.
                    </p>
                    
                    <p className="mb-4">
                        <strong>16.6 Time Limitation:</strong> You and we agree that any cause of action arising out of or related to the Website must commence within one (1) year after the cause of action accrues otherwise, such cause of action will be permanently barred.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mt-6 mb-3">17. Grievance Redressal</h2>
                    <p className="mb-4">
                        If you have any complaints or concerns with regards to Content and/or breach of these Terms, please contact our Grievance Officer:
                    </p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-semibold">Email: parthskyward@gmail.com</p>
                        <p className="font-semibold">Address: 41, Payal Park, Ahmedabad, Gujarat, India</p>
                        <p className="font-semibold">Phone: +91 1234567890</p>
                    </div>
                    
                    <p className="mt-4">
                        Please provide the following information when contacting us:
                    </p>
                    <ul className="list-disc pl-5 mt-2 mb-4 space-y-1">
                        <li>Your complete name and contact information</li>
                        <li>Details of the specific concern or complaint</li>
                        <li>Any relevant order numbers or transaction details</li>
                        <li>Supporting evidence or documentation</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mt-6 mb-3">18. Copyright Infringement Notice</h2>
                    <p className="mb-4">
                        We respect intellectual property rights. If you believe your work has been copied in a way that constitutes copyright infringement, please contact us at parthskyward@gmail.com with the following information:
                    </p>
                    
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li>A physical or electronic signature of a person authorized to act on behalf of the copyright owner</li>
                        <li>Identification of the copyrighted work claimed to have been infringed</li>
                        <li>Identification of the material on our website that is claimed to be infringing</li>
                        <li>Your address, telephone number or e-mail address</li>
                        <li>A statement that you have a good-faith belief that use of the material is not authorized by the copyright owner</li>
                        <li>A statement, under penalty of perjury, that the information in the notice is accurate</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mt-6 mb-3">19. Changes to These Terms</h2>
                    <p className="mb-4">
                        We reserve the right to update or modify these Terms & Conditions at any time. Changes will be posted on this page, and your continued use of the website constitutes acceptance of the updated terms. We may notify you of significant changes via email or through an in-website alert.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mt-6 mb-3">20. General Provisions</h2>
                    
                    <p className="mb-3"><strong>20.1 Severability:</strong> If any provision of these Terms shall be unlawful, void or for any reason unenforceable, then that provision shall be deemed severed from these Terms and shall not affect the validity and enforceability of any remaining provisions.</p>
                    
                    <p className="mb-3"><strong>20.2 Entire Agreement:</strong> These Terms constitute the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior or contemporaneous understandings or agreements.</p>
                    
                    <p className="mb-3"><strong>20.3 No Waiver:</strong> Any express waiver or failure to exercise promptly any right under these Terms will not create a continuing waiver or any expectation of non-enforcement.</p>
                    
                    <p className="mb-3"><strong>20.4 Assignment:</strong> You may not assign or transfer these Terms or any rights hereunder without our prior written consent.</p>
                    
                    <p className="mb-3"><strong>20.5 Relationship:</strong> None of the provisions of these Terms shall be deemed to constitute a partnership or agency between you and us.</p>
                </section>

                <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                        Copyright ©2024 Belly Buds . All rights reserved.
                    </p>
                    <p className="mt-2">
                        By using this website, you acknowledge that you have read, understood, and agree to these Terms & Conditions.
                    </p>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}