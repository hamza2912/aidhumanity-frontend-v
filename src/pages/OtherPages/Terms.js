import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

function Terms() {
  return (
    <>
      <Header />
      <main className="mt-16 lg:mt-32">
        <div className="w-full h-auto py-8 lg:py-16 bg-bwhite">
          <h1 className="text-3xl text-mont text-black-50 font-bold flex items-center justify-center">
            <img className="mr-2" src="./Icons/icon_help.svg" alt="icon_help" />
            Help Centre
          </h1>
        </div>
        <section className="w-full h-auto px-5 container mx-auto mt-12">
          <div className="w-full h-auto lg:flex hidden gap-2">
            <Link className="text-base text-mont text-gray" to="">
              Home
            </Link>
            <p className="text-base text-mont text-gray">/</p>
            <Link
              className="text-base text-mont text-gray-600 font-semibold"
              to=""
            >
              Help Centre
            </Link>
            <p className="text-base text-mont text-gray">/</p>
            <Link className="text-base text-mont text-gray" to="">
              Terms & Conditions
            </Link>
          </div>
          <div className="w-full h-auto flex lg:flex-row flex-col justify-between lg:py-16 pt-4 pb-16">
            <div className="lg:w-2/3 w-full h-auto">
              <h1 className="text-black-50 text-left lg:text-4xl text-3xl text-mont font-bold">
                Terms & Conditions
              </h1>
              <p className="text-lg text-mont text-gray-600 mt-4">
                Please read the following carefully
              </p>
              <h3 className="text-lg text-mont text-gray-600 font-semibold mt-8">
                Aid Humanity
              </h3>
              <p className="text-lg text-mont text-gray-600">
                Registered Charity Number XXXXXXXXX (England & Wales) <br />{' '}
                Registered office: 10 Borough Road, Burton-on-Trent DE14 2DA
              </p>
              <h3 className="text-lg text-mont text-gray-600 font-semibold mt-8">
                How we use your personal information
              </h3>
              <p className="text-lg text-mont text-gray-600">
                Access to and use of this website (
                <Link className="font-semibold text-blue" to="">
                  https://www.aidhumanity.co.uk/
                </Link>
                ) any related websites within the domain of islamicaid.com (the
                “Website”) is provided by Aid Humanity (“Aid Humanity”) and is
                subject to the following terms:
              </p>
              <h3 className="text-lg text-mont text-gray-600 font-semibold mt-8">
                Terms of Use
              </h3>
              <ul className="pl-8 pt-4 terms">
                <li className="text-lg text-mont text-gray-600 mt-4">
                  By using the Website you agree to be legally bound by these
                  terms of use, which shall take effect from your first use of
                  the Website. If these Terms and Conditions are not accepted in
                  full, the use of the Website must be terminated immediately.
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  For the purposes of this agreement, “content” means material
                  including, without limitation, text, video, graphics and
                  audio, published on the Website, whether copyright of Aid
                  Humanity or a third party.
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  Aid Humanity does not warrant that the functions contained in
                  this Website will be uninterrupted or error free, that defects
                  will be corrected, or that this site or the server that makes
                  it available are free of viruses or bugs or represents the
                  full functionality, accuracy, and reliability of the content.
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  Aid Humanity does not warrant that functions contained in the
                  Website will be uninterrupted or error free, that defects will
                  be corrected, or that the Website or the server that makes it
                  available on the internet are virus-free.
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  No data transmission over the internet can be guaranteed to be
                  100% secure; therefore any information sent by e-mail or
                  submitted through the Website is at your own risk.
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  The Website is provided “as is” without any representations or
                  any form of warranty (whether made expressly or implied by
                  law), including the implied warranties of satisfactory
                  quality, fitness for a particular purpose, non-infringement,
                  compatibility, security and accuracy.
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  Aid Humanity reserves the right to change these terms at any
                  time by posting changes online. Your continued use of the
                  Website after any changes are posted means you agree to be
                  legally bound by these terms as updated and/or amended.
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  The terms and use of the Website shall be governed by English
                  law and shall be subject to the exclusive jurisdiction of the
                  courts of England.
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  By donating to Aid Humanity via text you agree to have the
                  donation sum and the cost of a standard text message added to
                  your ‘pay monthly’ mobile phone bill or deducted from your
                  ‘pay as you go’ mobile phone credit.
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  Should donations for any particular appeal exceed our target
                  for that appeal then we will use your donation to help other
                  vulnerable children around the world wherever the need is
                  greatest.
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  Refunds: Under Charity Commission rules we are not usually
                  able to give refunds for donations made through this site.
                  Where refunds are made, it is at aid Humanity discretion. If
                  you experience any problem with your payment please contact on
                  email:{' '}
                  <Link className="font-semibold text-blue" to="">
                    info@aidhumanity.co.uk
                  </Link>
                  info@aidhumanity.co.uk. Refunds will be made to the credit
                  card you used to make a donation.
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  We do not actively fundraise from the under 18s and will aim
                  to ensure that no under 18’s are contacted with marketing
                  material.
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  All material on the Website is the copyright of Aid Humanity
                  or third parties. You may view the content of this site on
                  screen. You may not copy, reproduce, republish, download,
                  post, broadcast, transmit or otherwise use the Website content
                  in any way except for non-commercial, personal or educational
                  use. You also agree not to adapt, alter or create a derivative
                  work from any of the Website’s content except for
                  non-commercial, personal or educational use. Any other use of
                  the Website content requires the prior written permission of
                  Islamic Aid.
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  The names, images and logos identifying Aid Humanity or any
                  other third parties referred to on the Website and their
                  products and services may be subject to copyright, design
                  rights or trade mark rights. These trademarks may not be
                  reproduced without the consent of the relevant owners. Nothing
                  contained in these terms shall be construed as conferring any
                  licence or right to use any trademark, design right or
                  copyright of Aid Humanity or any other third party.
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  You agree to use the Website for lawful purposes and in a way
                  that does not infringe the rights of, nor restrict or inhibit
                  anyone else’s use and enjoyment of, the Website.
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  You agree to use the Website for lawful purposes and in a way
                  that does not infringe the rights of, nor restrict or inhibit
                  anyone else’s use and enjoyment of, the Website.
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  If there is any conflict between these terms and any rules
                  and/or specific terms of use appearing on specific sections of
                  the Website, then the latter shall prevail.
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  Aid Humanity will not be liable for any damages, including
                  indirect or consequential damages, or any damages arising from
                  the use or loss of use of the Website, or the loss of data or
                  profits, whether in contract, negligence or other tortuous
                  action, arising from or in connection with the use of the
                  Website.
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  The Website may contain links to other websites. These links
                  are provided for your convenience and Aid Humanity has no
                  control over such websites, nor is it responsible for their
                  content. Islamic Aid’s Privacy Policy does not extend to any
                  websites that can be accessed from{' '}
                  <Link className="font-semibold text-blue" to="">
                    https://www.aidhumanity.co.uk/
                  </Link>{' '}
                  or any related websites within the domain of{' '}
                  <Link className="font-semibold text-blue" to="">
                    https://www.aidhumanity.co.uk
                  </Link>
                  . The inclusion of these links on the Website does not imply
                  endorsement of any material on those websites, or any
                  association with their operators, unless otherwise stated. Aid
                  Humanity cannot guarantee the security of these sites, the
                  operation of the links or that they will be virus-free.
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  Your use of any third party websites is at your own risk and
                  subject to their respective terms & conditions and privacy
                  policies.
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  Where you are invited to submit any contribution to Aid
                  Humanity(including any text, photographs, graphics, video or
                  audio) you agree, by submitting your contribution, to grant
                  Aid Humanity a perpetual, royalty-free, non-exclusive,
                  sub-licensable right and license to use, reproduce, modify,
                  adapt, publish, translate, create derivative works from,
                  distribute, perform, play, make available to the public, and
                  exercise all copyright and publicity rights with respect to
                  your contribution worldwide and/or to incorporate your
                  contribution in other works in any media now known or later
                  developed for the full term of any rights that may exist in
                  your contribution, and in accordance with privacy restrictions
                  set out in Aid Humanity privacy policy. If you do not want to
                  grant to Aid Humanity the rights set out above, please do not
                  submit your contribution.
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  Contributions must be your own, they must be civil and
                  tasteful. They must not contain any unlawful or objectionable
                  content and they must not infringe the law. You agree that Aid
                  Humanity shall not be responsible for your or anyone else’s
                  contributions to its Website or any form of social media.
                  Should you identify contributions which are unlawful,
                  distasteful or otherwise objectionable then please contact
                  Islamic Aid:{' '}
                  <Link className="font-semibold text-blue" to="">
                    info@aidhumanity.co.uk
                  </Link>
                  .
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  When you providing your details or contributions to us you are
                  stating that you are over 18 years of age or are a minor with
                  parental consent. You agree that any information you provide
                  to us about yourself upon registration or at any time will be
                  true and accurate.
                </li>
                <li className="text-lg text-mont text-gray-600 mt-4">
                  You agree to review this agreement periodically to ensure you
                  are aware of any changes.
                </li>
              </ul>
              <div className="w-full h-auto border-2 border-gray-200 rounded-2xl py-6 px-5 flex lg:flex-row flex-col justify-between mt-6">
                <p className="text-black-50 text-mont text-lg font-bold">
                  Need further assistance? We’re here to help
                </p>
                <button className="text-white text-mont text-xs font-semibold rounded-lg text-center px-10 py-3 bg-sblue mt-4 lg:mt-0">
                  CONTACT US
                </button>
              </div>
            </div>
            <div className="w-px h-64 lg:flex hidden bg-lgray mx-8"></div>
            <div className="w-1/3 h-auto hidden lg:flex flex-col">
              <h2 className="text-black-50 text-xl text-mont font-bold">
                Related Articles
              </h2>
              <Link
                className="text-blue text-mont text-lg font-semibold mt-4"
                to="/terms"
              >
                Terms & Conditions
              </Link>
              <Link
                className="text-black-50 text-mont text-lg font-medium mt-4"
                to="/privacy"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-black-50 text-mont text-lg font-medium mt-4"
                to="/donation_policy"
              >
                Donation Policy
              </Link>
              <Link
                className="text-black-50 text-mont text-lg font-medium mt-4"
                to="/refund"
              >
                Refund Policy
              </Link>
              <img
                className="mt-32"
                src="./images/logo_aid-humanity-icon.png"
                alt="logo_aid-humanity-icon"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer notification={true} />
    </>
  );
}

export default Terms;
