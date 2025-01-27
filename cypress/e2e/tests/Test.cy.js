describe('Assessment Test', () => {
    const Signup_Name = "rs57000";
    const Signup_Email = "itol420@yahoo.com";
    const Password = "password123";
    const Month = "April";
    const Date = "18";
    const Year = "2004";
    const FirstName = "Mike";
    const LastName = "Ross";
    const Company_Name = "Spark Solutions";
    const Address = "1234 Main St";
    const Address2 = "Apt 123";
    const City = "Los Angeles";
    const State = "California";
    const Zip = "90001";
    const Mobile_Number = "1234567890";
    const Quantity_Value = "2";
    const Card_Name = "American Express";
    const Card_Number = "463956349504570";
    const CVC_Number = "4389";
    const Expiration_Month = "11";
    const Expiration_Year = "2028";
    const Order_Confirmation_Mssg = "Congratulations! Your order has been confirmed!";
    const File_Path_Directory = "src/test/resources/upload_test1.txt";
    const Upload_File_Name = "upload_test1.txt";
    const Alert_Message = "Press OK to proceed!";

    it('Web UI test', () => {
        cy.visit('https://automationexercise.com/login');

        // LogIn or SignUp Page
        cy.get("input[type='text']").type(Signup_Name).should('have.value', Signup_Name);
        cy.get("input[data-qa='signup-email']").type(Signup_Email).should('have.value', Signup_Email);
        cy.get("button:contains('Signup')").should('be.visible').click();

        cy.get("input[id='id_gender1']").click().should('be.checked');
        cy.get("input[type='password']").type(Password).should('have.value', Password);

        cy.get("select[id='days']").select(Date).should('have.value', Date);
        cy.get("select[id='months']").select(Month);
        cy.get("select[id='years']").select(Year).should('have.value', Year);

        cy.get("input[id='first_name']").type(FirstName).should('have.value', FirstName);
        cy.get("input[id='last_name']").type(LastName).should('have.value', LastName);
        cy.get("input[id='company']").type(Company_Name).should('have.value', Company_Name);
        cy.get("input[id='address1']").type(Address).should('have.value', Address);
        cy.get("input[id='address2']").type(Address2).should('have.value', Address2);

        cy.get("select[id='country']").select('United States').should('have.value', 'United States');
        cy.get("input[id='state']").type(State).should('have.value', State);
        cy.get("input[id='city']").type(City).should('have.value', City);
        cy.get("input[id='zipcode']").type(Zip).should('have.value', Zip);
        cy.get("input[id='mobile_number']").type(Mobile_Number).should('have.value', Mobile_Number);

        cy.get("button:contains('Create Account')").click();
        cy.get("b:contains('Account Created!')").should('be.visible');
        cy.get("a:contains('Continue')").click();

        // Home Page
        cy.get("a[href='#Men']").click();
        cy.get("li a:contains('Jeans ')").click();

        // Product Category Page
        cy.get("a[href='/product_details/37']").click();

        // Product Details Page
        cy.get("input[type='number']").clear().type(Quantity_Value).should('have.value', Quantity_Value);
        cy.get("button[type='button']").should('be.enabled').click();
        cy.get("h4:contains('Added!')").should('be.visible');
        cy.get("u:contains('View Cart')").click();

        // View Cart Page
        cy.get("a:contains('Proceed To Checkout')").should('be.visible').click();

        // Checkout Page
        cy.get("a:contains('Place Order')").should('be.visible').click();

        // Payment Page
        cy.get("input[name='name_on_card']").type(Card_Name).should('have.value', Card_Name);
        cy.get("input[name='card_number']").type(Card_Number).should('have.value', Card_Number);
        cy.get("input[data-qa='cvc']").type(CVC_Number).should('have.value', CVC_Number);
        cy.get("input[name='expiry_month']").type(Expiration_Month).should('have.value', Expiration_Month);
        cy.get("input[name='expiry_year']").type(Expiration_Year).should('have.value', Expiration_Year);

        cy.get("button[data-qa='pay-button']").should('be.visible').click();

        // Order Confirmation Page
        cy.get("p:contains('Congratulations! Your order has been confirmed!')").should('be.visible');

        // Contact Us Page
        cy.get("a:contains(' Contact us')").click();
        cy.get("input[data-qa='name']").type("Alex").should('have.value', "Alex");
        cy.get("input[data-qa='email']").type("alexofficial@gmail.com").should('have.value', "alexofficial@gmail.com");
        cy.get("input[data-qa='subject']").type("Regarding Order").should('have.value', "Regarding Order");
        cy.get("textarea").type("This is an automated message").should('have.value', "This is an automated message");



    });
});