# ToDo

Remove/Update NeverBounce API Key
Update URLs to point to EQOH assets
Update footer to remove give by mail reference

# Page Theme

Theme Name: 4site_2col
Description: 4Site's Bonterra Page Theme

## Custom Theme Merge Fields

### Custom Field 1

Short Name: Main Background Image URL
Description: This is the URL for the large image that appears on the page
Field Type: Text
Field Values: N/A
Default Value: Example: https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/imgs/bg.ba7e8cc0703082ae16a3988384bfd1a2.jpg
Required: Y
Merge Field Name: {{Main_Background_Image_URL}}

### Custom Field 2

Short Name: Mobile Background Image URL
Description: This is the URL for the smaller image that appears in the header when the page is viewed in mobile
Field Type: Text
Field Values: N/A
Default Value: Example: https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/imgs/eqfl-mobile.jpg
Required: N
Merge Field Name: {{Mobile_Background_Image_URL}}

### Custom Field 3

Short Name: Mobile Background Image Attribution
Description: Photo credit of the background image
Field Type: Text
Field Values: N/A
Default Value: N/A
Required: N
Merge Field Name: {{Mobile_Background_Image_Attribution}}

### Custom Field 4

Short Name: Mobile Take Action Button Label
Description: This is the label shown on the mobile take action button
Field Type: Text
Field Values: N/A
Default Value: Take Action
Required: N
Merge Field Name: {{Mobile_Take_Action_Button_Label}}

### Custom Field 5

Short Name: Submit Button Color
Description: This is the background color for the "Continue" and "Submit" buttons
Field Type: Dropdown
Field Values: teal, black, pink, blue, purple, brown, ltgray, dkgray
Default Value: N/A
Required: Y
Merge Field Name: {{Submit_Button_Color}}

### Custom Field 6

Short Name: Premium 1 Color
Description: The background color for the first Premium section
Field Type: Dropdown
Field Values: yellow, teal, black, pink, blue, purple, brown, ltgray, dkgray
Default Value: N/A
Required: N
Merge Field Name: {{Premium_1_Color}}

### Custom Field 7

Short Name: Premium 1 Image URL
Description: The image URL for the first Premium section
Field Type: Text
Field Values: N/A
Default Value: N/A
Required: N
Merge Field Name: {{Premium_1_Image_URL}}

### Custom Field 8

Short Name: Premium 1 Title
Description: The title for the first Premium section
Field Type: Text
Field Values: N/A
Default Value: N/A
Required: N
Merge Field Name: {{Premium_1_Title}}

### Custom Field 9

Short Name: Premium 1 Body
Description: The body text for the first Premium section
Field Type: Text
Field Values: N/A
Default Value: N/A
Required: N
Merge Field Name: {{Premium_1_Body}}

### Custom Field 10

Short Name: Premium 2 Color
Description: The background color for the second Premium section
Field Type: Dropdown
Field Values: yellow, teal, black, pink, blue, purple, brown, ltgray, dkgray
Default Value: N/A
Required: N
Merge Field Name: {{Premium_2_Color}}

### Custom Field 11

Short Name: Premium 2 Image URL
Description: The image URL for the second Premium section
Field Type: Text
Field Values: N/A
Default Value: N/A
Required: N
Merge Field Name: {{Premium_2_Image_URL}}

### Custom Field 12

Short Name: Premium 2 Title
Description: The title for the second Premium section
Field Type: Text
Field Values: N/A
Default Value: N/A
Required: N
Merge Field Name: {{Premium_2_Title}}

### Custom Field 13

Short Name: Premium 2 Body
Description: The body text for the second Premium section
Field Type: Text
Field Values: N/A
Default Value: N/A
Required: N
Merge Field Name: {{Premium_2_Body}}

### Custom Field 14

Short Name: EFT Message
Description: A message that appears below the EFT button
Field Type: Text
Field Values: N/A
Default Value: N/A
Required: N
Merge Field Name: {{EFT_Message}}

## <head> Content

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>EAGRID - eqoh</title>
<meta property="og:title"	content="{{OpenGraphTitle}}" />
<meta property="og:description"	content="{{OpenGraphDescription}}" />
<meta property="og:image"	content="{{OpenGraphImage}}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@equalityfl" />
<script type='text/javascript'>
var fs_theme_options = {
main_background_image_url: '{{Main_Background_Image_URL}}',
submit_button_color: '{{Submit_Button_Color}}',
mobile_background_image_attribution: '{{Mobile_Background_Image_Attribution}}',
mobile_background_image_url: '{{Mobile_Background_Image_URL}}',
mobile_take_action_button_label: '{{Mobile_Take_Action_Button_Label}}',
eft_message: '{{EFT_Message}}',
premiums: [{
color: `{{Premium_1_Color}}`,
image_url: `{{Premium_1_Image_URL}}`,
title: `{{Premium_1_Title}}`,
body: `{{Premium_1_Body}}`
},{
color: `{{Premium_2_Color}}`,
image_url: `{{Premium_2_Image_URL}}`,
title: `{{Premium_2_Title}}`,
body: `{{Premium_2_Body}}`
}
]
};
</script>
<style>
body:not(.showBody){
opacity: 0;
}
</style>

## <body> Content

    <div class="bonterragrid-container button-{{Submit_Button_Color}}">
      <div class="content-wrap">
        <div class="take-action">{{Mobile_Take_Action_Button_Label}}</div>
        <div class="responsive-hero">
          <img src="{{Mobile_Background_Image_URL}}" border="0" alt="" title="{{Mobile_Background_Image_Attribution}}" decoding="async" loading="lazy">
          <div class="separator"></div>
        </div>
        <div class="bonterragrid-content">
          <img src="https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/imgs/logo.1e2b6bd2243ff0dc5861e2f89b190b1d.svg" class="logo" decoding="async" loading="lazy">
          <h1>Give the gift of equality today</h1>
          {{EmbedForm}}
        </div>
        <div class="bonterragrid-footer">
          <img src="https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/imgs/footer-logos.png" border="0" alt="" title="" decoding="async" loading="lazy">
          <h3>You can also mail in your donations to:</h3>
          <p>Equality Ohio Action, Inc.,<br>
            P.O. Box 20786, Tampa FL 33622-0786</p>
        </div>
      </div>
      <div class="bg-image"></div>
    </div>

<script type="text/javascript" src="https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/main.js"></script>
<!--<script type="text/javascript" src="https://apps.4sitestudios.com/michaelw/eqoh/main.js"></script>-->
<script type="text/javascript">
    _NBSettings = {
        apiKey: 'public_16e9dd5166e5ff6fe2a6fe1de4da69ee'
    };

    var nvtag_callbacks = nvtag_callbacks || {};
    nvtag_callbacks.postRender = nvtag_callbacks.postRender || [];
    nvtag_callbacks.postRender.push(function(args) {
        // run our JS
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'https://cdn.neverbounce.com/widget/dist/NeverBounce.js';
        document.head.appendChild(s);

        // return the args
        return args;
    });
</script>

# Page

## Basics

Name: 4Site Reference Form
Title: Give the Gift of Equality Today
URL: give-gift-equality-today
Description: This form was created by Bryan @ 4Site for testing & development on 2024-05-08. DO NOT DELETE
Enable Auto-Scroll on Mobile: Y
Designation: ?
Credit Card: ?
PayPal: ?
EFT: ?
CAPTCHA Protection: Y
Enable One Click Conversions With FastAction: Y

## Build Page (Screenshot: https://cln.sh/Q2vQytmc)

### Write an Introduction

<p>Aliquet ullamcorper vitae mauris, egestas enim aliquam tincidunt sem feugiat. Praesent imperdiet mauris, purus mauris vulputate tellus. Ipsum sit mi vulputate dolor, aliquam morbi morbi a. Eget turpis sem purus in cras varius. Facilisi ut sit quis purus feugiat.</p>

<div class="accordions">
<div class="accordion">Other ways to give</div>

<div class="panel">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<div class="accordion">Section 2</div>

<div class="panel">
<p>Lorem ipsum...</p>
</div>

<div class="accordion">Section 3</div>

<div class="panel">
<p>Lorem ipsum...</p>
</div>
</div>

### Layout Options

Multi-step

### Contribution Information

Section Title: Contribution Information
Min: $3.00
Max: $999,999.99
Provide Amount Options: Yes
Set Amount Options and Select Default Value: 30, 60, 85, 110, 160, 210
-Default: 30
-Add a field for supporter to enter any amount: Y
Enable Recurring Contribution Options: Y
Do you want different ask amount than your one-time: Y
Choose Frequency Options
Monthly
-Frequency Option Label: Monthly
-Amount Label: /mo
-Pitch or Additional Message: Aliquet ullamcorper vitae mauris, egestas enim aliquam tincidunt sem feugiat.
One-time
-Frequency Option Label: Give Once
-Amount Label: N/A
-Pitch or Additional Message: Aliquet ullamcorper vitae mauris, egestas enim aliquam tincidunt sem feugiat.
Set Recurring Amount Options and Select Default Value: 20, 50, 75, 100, 150, 200
-Add a field for supporter to enter any amount: Y
Cover Costs: Y
-Field Label: I'd like to help cover the transaction fees for my donation
-Default Value: Unchecked
Tributes & Gift Membership: Y
-Tribute Type: In honor/memory of
--Make this in honor/memory?: Y
---Field Label: I'd like to make this contribution in honor or in memory of someone
--Enable Field Honorary or Memorial: Y
---Field Label: Is this an Honorary or Memorial Gift?
--Honoree Name: Y
---Field Label: Honoree Name
--Notify Someone: Y
---Field Label: I'd like to notify someone of this contribution
-Section Title: Who would you like to notify?
-Message: <p>A message will be sent to the recipient to inform them of your contribution. Customize the notification by adding a personal message.</p>
-Enable Field Recipient First Name: N
--Field Label: First Name
-Enable Field Recipient Last Name: N
--Field Label: Last Name
-Enable Field Recipient Street Address: N
--Field Label: Street Address
-Enable Field Recipient City: N
--Field Label: City
-Enable Field Recipient State/Province: N
--Field Label: State/Province
-Enable Field Recipient Postal Code: N
--Field Label: Postal Code
-Enable Field Recipient Country: N
--Field Label: Country
-Enable Field Recipient Email: Y
--Field Label: Email
-Enable Field Message to Recipient: Y
--Field Label: Message
Contact Information
Section Title: Contact Information
Accept Contributions from Supporters Living Outside the United States: Y
Prefix: N
First Name: Y - Required
Middle Name: N
Last Name: Y - Required
Suffix: N
Date of Birth: N
Pronouns: N
Gender: N
Race: N
Ethnicity: N
Sexual Orientation: N
Preferred Language: N
Street Address: Y
Address Line 2: N
Country: N
City: Y - Required
State/Province: Y - Required
Postal Code: Y - Required
Home Phone: N
Mobiel Phone: Y
SMS Signup: N
--Field Label: Sign me up for SMS messages
--Hidden Field: Y
--Default Value: Y
Email: Y - Required
Email Signup: Y
--Field Label: Yes, sign me up for email updates.
-- Hidden Field: Y
--Default Value: Y
Twitter Handle: N
Facebook Profile URL: N
Payment Information
-Section Title: Payment Information

## Design

Style Your Form: Apply a theme to your form
Published Themes: 4site_2col
Main Background Image URL: https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/bg.ba7e8cc0703082ae16a3988384bfd1a2-1920x1742.jpg
Mobile Background Image Attribution: Test Attribution
Mobile Background Image URL: https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/imgs/eqfl-mobile.jpg
Mobile Take Action Button Label: Take Action
Submit Button Color: teal
Premium 1 Body: With a one-time contribution of $35 or more, members receive an Equality Florda Membership Card and enamel pin.
Premium 1 Color: yellow
Premium 1 Image URL: https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/imgs/img-memberCard.jpg
Premium 1 Title: Become a Member
EFT Message: This is an optional message that appears below the EFT button!

## Confirmation Page

Thank You Page: Display Thank You message

<p>Dear {{FirstName or 'Friend'}},</p>

<p><span style="font-weight:bold">Thank you for your generous {{if RecurringContribution}}{{RecurringFrequency}} commitment of {{format_currency(ContributionAmount, ContributionCurrency)}} until {{format_date(RecurringEndDate,'MDY','short',Language)}}{{else}}contribution{{end}}.</span></p>

<p>Please print out this contribution confirmation page for your records.</p>

<p><span style="font-weight:bold">Contribution Information:</span><br />
Contribution Confirmation ID: {{PaymentConfirmationId}}<br />
Contribution Date: {{format_date(SubmissionDate,'MDY','short',Language)}} {{SubmissionTime}}<br />
Contribution Amount: {{format_currency(ContributionAmount, ContributionCurrency)}}</p>

<p><span style="font-weight:bold">Contact Information:</span><br />
{{FullName}}<br />
{{StreetAddress}}<br />
{{City}}&nbsp; {{StateOrProvince}}&nbsp;{{ZipOrPostal}}<br />
{{Country}}</p>

<p>Account Type: {{AccountType}}<br />
{{if AccountNumber}}Account Number Ending: ****{{AccountNumber}} {{end}}</p>

Social Metadata
-Share Image: https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/delmay-6%201.jpg
-Share Title: Give the gift of equality today
-Share Description: Aliquet ullamcorper vitae mauris, egestas enim aliquam tincidunt sem feugiat.
Twitter Handle: @EqualityOhio
Schedule Deactivation: Do not deactivate
Deactivation Behavior: Display deactivated message -<p>Sorry, the page you are trying to access is not accepting submissions at this time.</p>
