
<!-- GENERATED DOCUMENT! DO NOT EDIT! -->
# JS Learner Forms &mdash; Test Dummy Form #
#### The Explanation ####

Things start changing here. Up to this point you were concerned with altering code to make tests pass. The tests guided you where to go. Now you will be given functioning code, and be expected to write the tests to verify it is functioning.

You can also look at [JS Learner Forms documentation](../FORMS.md) for other forms.

You will be working in the [test/4_test-dummy-form.test.js](../test/4_test-dummy-form.test.js) file.


## Table Of Contents ##

- [Section 1: Why would I write tests for code I know works?](#user-content-why-would-i-write-tests-for-code-i-know-works?)
- [Section 2: A word about hints](#user-content-a-word-about-hints)
- [Section 3: The application under test](#user-content-the-application-under-test)
- [Section 4: Point of Sale Data Utilities](#user-content-point-of-sale-data-utilities)
- [Section 5: Get Report](#user-content-get-report)

## Why would I write tests for code I know works? ##

There are two main reasons:


### Understanding ###

By writing tests for this code, you will gain understanding of _how_ to write tests. This will show you one of the common frameworks and enough that you will be able to find your way around other common frameworks.
    

### Regression ###

The biggest reason to test a known working code base is to ensure that it stays working. You will see by testing this code base that coming into a code base you do not understand and gaining that understanding is hard work. Having tests around that code ensures that someone unfamiliar with, or has been away to long from, the code base does not accidentally break existing functionality.
    
    

## A word about hints ##

This section is doable without the hints. it is _hard_ but doable. However, the only hints that make sense will make the exercises really easy. Try first without them, but do not let yourself become too stuck.
    

## The application under test ##

The application under test is a Point of Sale reporting utility. It will report on all sales or all returns.

### Sales Report App &mdash; Important Files ###

> jsforms-source/4_test-dummy-form/sales-reporter/[salesReporterFactory.js](../jsforms-source/4_test-dummy-form/sales-reporter/salesReporterFactory.js)
> jsforms-source/4_test-dummy-form/pos-transaction-services/[reportDataBuilder.js](../jsforms-source/4_test-dummy-form/pos-transaction-services/reportDataBuilder.js)
    

### Point Of Sale Data Utility Factory Builder ###

File: [/4_test-dummy-form/pos-transaction-services/pointOfSaleDataUtilsFactory.js](../jsforms-source/4_test-dummy-form/pos-transaction-services/pointOfSaleDataUtilsFactory.js)

This will build the utility that calculates counts for items based on their transaction status.

This function takes a single parameter `transactionStatuses` that allow the status to be configured. The `transactionStatuses` object is expected to have two properties

`Sale` which is a constant number that maps to transactions caused by the sale of product. For our tests we will configure this to have the value `1`.

and

`Return` which is a constant number that maps to transactions caused by the return of product. For our tests we will configure this to have the value `2`.

These values are already set up for you.

This function returns an object with two methods.

#### Get Product Count by Sale ####

This method takes the parameter `transactionRecords` which is an array of transaction records. Each record is expected to have the following shape:

```javascript
{
    productId, // integer number unique to the product
    transactionStatus, // integer number representing Sale or Return
    quantity // integer number representing the total number of the item sold or returned
}
```

It will return an object who's properties will be the productIds of all items that were sold in the `transactionRecords`. Those properties will hold the total of all quantities sold.

**Exaple**

Given

```javascript
const transactionRecord1 = {
    productId: 3,
    transactionStatus: 1
    quantity 2
};

const transactionRecord2 = {
    productId: 3,
    transactionStatus: 1
    quantity 3
}

const transactionRecord3 = {
    productId: 6,
    transactionStatus: 1
    quantity 4
}
```

The result should look like the following:

```javascript
{
    3: 5,
    6: 4
}
```

Because there is a total of 5 items sold of Product ID 3, and only 4 items sold of Product ID 6.

#### Get Product Count by Return ####

This method takes the parameter `transactionRecords` which is an array of transaction records. Each record is expected to have the following shape:

```javascript
{
    productId, // integer number unique to the product
    transactionStatus, // integer number representing Sale or Return
    quantity // integer number representing the total number of the item sold or returned
}
```

It will return an object who's properties will be the productIds of all items that were returned in the `transactionRecords`. Those properties will hold the total of all quantities sold.

**Exaple**

Given

```javascript
const transactionRecord1 = {
    productId: 3,
    transactionStatus: 2
    quantity 1
};

const transactionRecord2 = {
    productId: 3,
    transactionStatus: 2
    quantity 2
}

const transactionRecord3 = {
    productId: 6,
    transactionStatus: 2
    quantity 5
}
```

The result should look like the following:

```javascript
{
    3: 3,
    6: 5
}
```

Because there is a total of 3 items returned of Product ID 3, and 5 items returned of Product ID 6.
    

### Sales Reporter Factory ###

The `salesReporterFactory` function has the following signature

```javascript
function salesReporterFactory(
    dataLoader,
    pointOfSaleDataUtilsFactory,
    reportDataBuilderFactory
)
```

#### Sales Reporter Factory Parameters ####

The `dataLoader` parameter is an object with following shape:

```javascript
{
    getProductData,
    getTransactionData,
    getTransactionStatuses
}
```

##### Get Product Data Function #####

The getProductData function has the following signature:

```javascript
getProductData()
```

###### Get Product Data Return Value ######

The `getProductData` function returns an array of objects that have then following structure:

```javascript
{
    id, // integer number -- id uniquely identifies this product
    name, // string -- Name of product
    price // number -- the sales price for a single item of this product
}
```

##### Get Transaction Data Function #####

The `getTransactionData` function has the following signature:

```javascript
getTransactionData()
```

###### Get Transaction Data Return Value ######

The `getTransactionData` function returns an array of objects that have the following structure:

```javascript
{
    productId, // integer number -- id from a product datum
    transactionStatus, // integer number -- sale or return, must match the transactionStatuses object
    quantity // integer number -- count sold or returned
}
```

##### Get Transaction Types Function #####

The `getTransactionStatuses` function has the following signature:

```javascript
getTransactionStatuses()
```

###### Get Transaction Types Return Value ######

The `getTransactionStatuses` function returns an object with the following structure:

```javascript
{
    Sale = X, // where X is an integer number
    Return = Y // where Y is an integer number
}
```

#### Sales Reporter Factory Return Value ####

The `` function returns an object with the following structure:

```javascript
{
    getReport
}
```

##### Get Report Function #####

The `getReport` function has the following signature:

```javascript
function getReport(transactionStatus)
```

The `transactionStatus` parameter is an integer number that maps to Sale or Return as determined by the `transactionStatuses` returned from the `getTransactionStatuses` function.

###### Get Report Return Value ######

The `getReport` function returns an array of objects with the following structure:

```javascript
{
    productName, // string -- Name of product, from productDatum.Name
    quantity, // integer number -- count sold or returned, total of transactionData.quantity
    total // number -- the sales price for a single item of this product quantity * productDatum.price
}
```

Each item in the array will represent the results for a different product.
    

### Report Data Builder Factory ###

The function `reportDataBuilderFactory` has the following signature:

```javascript
function reportDataBuilderFactory(transactionStatuses)
```

#### Report Data Builder Factory Parameter ####

It takes an object with the following shape:

```javascript
{
    Sale = X, // where X is an integer number
    Return = Y // where Y is an integer number
}
```

#### Report Data Builder Factory Return Value ####

It then returns an object with the following structure:

```javascript
{
    buildReportData
}
```

##### Build Report Data Parameters #####

The `buildReportData` is a function that has the following signature:

```javascript
buildReportData(
    transactionStatus /*integer number*/,
    transactionData /*object array*/,
    productData /*object array*/
)
```

The `transactionStatus` parameter maps to one of the integers in the `transactionStatuses` object.

The `transactionData` parameter is an array of objects with the following structure:

```javascript
{
    productId, // integer number -- id from a product datum
    transactionStatus, // integer number -- sale or return, must match the transactionStatuses object
    quantity // integer number -- count sold or returned
}
```

The `productData` parameter is an array of objects that have the following structure:

```javascript
{
    id, // integer number -- id uniquely identifies this product
    name, // string -- Name of product
    price // number -- the sales price for a single item of this product
}
```

##### Build Report Data Return Value #####

The `buildReportData` function returns an array of objects that have the following structure:

```javascript
{
    productName, // string -- Name of product, from productDatum.Name
    quantity, // integer number -- count sold or returned, total of transactionData.quantity
    total // number -- the sales price for a single item of this product quantity * productDatum.price
}
```

Each item in the array will represent the results for a different product.
    
    

## Point of Sale Data Utilities ##

### Point of Sale Data Utilities &mdash; Important Files ###

Test File:

> test/[4_test-dummy-form.test.js](../test/4_test-dummy-form.test.js)

File Under Test:

> jsforms-source/4_test-dummy-form/pos-transaction-services/[pointOfSaleDataUtilsFactory.js](../jsforms-source/4_test-dummy-form/pos-transaction-services/pointOfSaleDataUtilsFactory.js)

Helpers File:

> test/form-helpers/[4_test-dummy-helpers.js](../test/form-helpers/4_test-dummy-helpers.js)
    

### Get product count by sale ###
You will be testing that the `getProductCountBySale` works correctly. (Don't worry it does, but you have to prove it.)

There are a series of tests already layed out for you. We will approach each one individually.

#### It returns an empty object for sale counts if no sale data exists ####

This first test ensures that the `getProductCountBySale` function works properly if you give it nothing to do. So when you give it an empty array, it should return an empty object.

The process you will follow is:

1. Enable the test
2. Add guide comments
   1. Act
   2. Assert
3. Implement the act
4. Implement the assert
5. Remove Guide comments

##### Enable the test #####

Each test case is defined by an `it` block. The format for an it block is as follows

```javascript
    it('has a description here', testFunction);
```

The description is the name of the test. The test function, can be a function name, a function expression, or an arrow function expression. For this exorcise use the arrow function expression like bellow.

```javascript
    it('does some thing', () => {});
```

This step will cause the test to pass. However it is a false positive as this test does nothing.

<details><summary>Hints</summary>

The `it` already exists on line 51, all you need to do is add the arrow function expression. The description is the name of the parent section without then "It":

> returns an empty object for sale counts if no sale data exists

<details><summary>Code</summary>

**Example**

```javascript
    it('returns an empty object for sale counts if no sale data exists', () => {});
```

</details>

</details>

##### Add Guiding Comments #####

To the arrow function expression, you will add the following comments

```javascript
// Act
// Assert
```

These represent the logical steps of testing such a simple thing. We will then use the comments to implement the test.

<details><summary>Hints</summary>

You will need to add two line brakes to the arrow function expression between the curly braces.

<details><summary>Code</summary>

**Example**

```javascript
    it('returns an empty object for sale counts if no sale data exists', () => {
        // Act
        // Assert
    });
```

</details>

</details>

##### Implement the Act #####

The "Act" refers to the action under test. You will need to do the thing the test is trying to test. So with this test you are trying to test what will happen when `getProductCountBySale` method on the `pointOfSaleDataUtilities` object is called with an empty array.

<details><summary>Hints</summary>

You need to make a call the the `getProductCountBySale` method with an empty array and set a variable to that result.

<details><summary>Code</summary>

**Example**

```javascript
    it('returns an empty object for sale counts if no sale data exists', () => {
        // Act
        let result = pointOfSaleDataUtilities.getProductCountBySale([]);
        // Assert
    });
```

</details>

</details>

##### Implement the Assert #####

Assert refers to the need to validate that the code does what we expect it to do. It often uses a keyword `assert`. For our tests they will.

Now you need to validate that the result to the call of `getProductCountBySale` returns an empty object.

> Note: an empty object in JavaScript is an object with no properties or methods. i.e `{}`

You will use the `assert.deepEqual` method to prove this. This method has the following signature:

```javascript
assert.deepEqual(actualResult, expectedResult)
```

<details><summary>Hints</summary>

The expected result is `{}`.

<details><summary>Code</summary>

**Example**

```javascript
    it('returns an empty object for sale counts if no sale data exists', () => {
        // Act
        let ? = pointOfSaleDataUtilities.getProductCountBySale([]);
        // Assert
        assert.deepEqual(?, {});
    });
```

</details>

</details>

##### Remove guide comments #####

Now delete then comments as they provide no extra value.

<details><summary>Hints</summary>

Delete the comment lines

<details><summary>Code</summary>

**Example 1 (`let`)**

```javascript
    it('returns an empty object for sale counts if no sale data exists', () => {
        let ? = pointOfSaleDataUtilities.getProductCountBySale([]);

        assert.deepEqual(?, {});
    });
```

**Example 2 (`var`)**

```javascript
    it('returns an empty object for sale counts if no sale data exists', () => {
        var ? = pointOfSaleDataUtilities.getProductCountBySale([]);

        assert.deepEqual(?, {});
    });
```

</details>

</details>

#### It returns an object with a single count of 1 when only one item, quantity 1 was purchased ####

The next test is to test what happens when a only one item is passed to the `getProductCountBySale` method and it is a sale with only one item sold of that product.

It will then return an item with a property equal to the product ID with an integer value equal to that item's quantity. So if `productId: 42` was passed you should get an item that looks like:

```javascript
{
    [42]: 1
}
```

The process you will follow is:

1. Enable the test
2. Add guide comments
   1. Arrange
   2. Act
   3. Assert
3. Implement the arrange
4. Implement the act
5. Implement the assert
6. Remove Guide comments

This will be the last test where we dive into each of these steps in detail.

##### Enable the test test 2 #####

Each test case is defined by an `it` block. Enabling the test will cause the test to pass. However it is a false positive as this test does nothing.

<details><summary>Hints</summary>

You did this once already in the last test.

The `it` already exists just below the last test, all you need to do is add the arrow function expression. The description is the name of the parent section without then "It":

> returns an object with a single count of 1 when only one item, quantity 1 was purchased

<details><summary>Code</summary>

**Example**

```javascript
    it('returns an object with a single count of 1 when only one item, quantity 1 was purchased', () => {});
```

</details>

</details>

##### Add guide comments test 2 #####

You will add the following three comments to the arrow function expression.

```javascript
// Arrange
// Act
// Assert
```

> Note: these comments are often referred to as "The Triple A" comments.

<details><summary>Hints</summary>

You will need to add two line brakes to the arrow function expression between the curly braces.

<details><summary>Code</summary>

**Example**

```javascript
    it('returns an object with a single count of 1 when only one item, quantity 1 was purchased', () => {
        // Arrange
        // Act
        // Assert
    });
```

</details>

</details>

##### Implement the Arrange test 2 #####

Arrange refers to the need to do some setup before we act.

In this test we need to create a transaction record with the transaction status of Sale, and a quantity of 1. Write the code beneath the comment.

You will use the helper function `buildTransactionRecord` which has the following signature.

> `buildTransactionRecord(productId, transactionStatus, quantity)`

The `productId` is a integer number intended to identify then product. In this test it can be any valid integer, though probably should keep it positive.

The `transactionStatus` is a integer number that represents Sale or Return. You have a helper `transactionStatuses`. In this test you will use the value `transactionStatuses.Sale`.

The `quantity` is a positive integer number that represents the amount sold.

<details><summary>Hints</summary>

You will create a variable and assign it to the value returned from the `buildTransactionRecord` function call.

<details><summary>Code</summary>

**Example 1 (`let`)**

```javascript
    it('returns an object with a single count of 1 when only one item, quantity 1 was purchased', () => {
        // Arrange
        let ? = buildTransactionRecord(?, transactionStatuses.Sale, 1);
        // Act
        // Assert
    });
```

**Example 2 (`var`)**

```javascript
    it('returns an object with a single count of 1 when only one item, quantity 1 was purchased', () => {
        // Arrange
        var ? = buildTransactionRecord(?, transactionStatuses.Sale, 1);
        // Act
        // Assert
    });
```

</details>

</details>

##### Implement the Act test 2 #####

The "Act" refers to the action under test. You will need to do the thing the test is trying to test. So with this test you are trying to test what will happen when `getProductCountBySale` method on the `pointOfSaleDataUtilities` object is called with an empty that has the variable created during the arrange.

<details><summary>Hints</summary>

You need to make a call the the `getProductCountBySale` method with an empty array and set a variable to that result.

<details><summary>Code</summary>

**Example 1 (`let`)**

```javascript
    it('returns an object with a single count of 1 when only one item, quantity 1 was purchased', () => {
        // Arrange
        let ? = buildTransactionRecord(?, transactionStatuses.Sale, 1);

        // Act
        let result = pointOfSaleDataUtilities.getProductCountBySale([?]);
        // Assert
    });
```

**Example 2 (`var`)**

```javascript
    it('returns an object with a single count of 1 when only one item, quantity 1 was purchased', () => {
        // Arrange
        var ? = buildTransactionRecord(?, transactionStatuses.Sale, 1);

        // Act
        var result = pointOfSaleDataUtilities.getProductCountBySale([?]);
        // Assert
    });
```

</details>

</details>

##### Implement the Assert test 2 #####

Assert refers to the need to validate that the code does what we expect it to do.

Now you need to validate that the result to the call of `getProductCountBySale` returns an object with a single count.

The object is expected to have the following shape.

```javascript
    {
        [productId]: 1
    }
```

The productId in this case is the value given to the first parameter of the `buildTransactionRecord` function call.

You will use the `assert.deepEqual` method to prove this. This method has the following signature:

```javascript
assert.deepEqual(actualResult, expectedResult)
```

<details><summary>Hints</summary>

You can just copy the provided object above into the assert for the expected value, and replace `productId` with the correct number.

<details><summary>Code</summary>

**Example 1 (`let`)**

```javascript
    it('returns an object with a single count of 1 when only one item, quantity 1 was purchased', () => {
        // Arrange
        let transactionRecord = buildTransactionRecord(?, transactionStatuses.Sale, 1);

        // Act
        let result = pointOfSaleDataUtilities.getProductCountBySale([transactionRecord]);

        // Assert
        assert.deepEqual(result, {
            [?]: 1
        });
    });
```

**Example 2 (`var`)**

```javascript
    it('returns an object with a single count of 1 when only one item, quantity 1 was purchased', () => {
        // Arrange
        var transactionRecord = buildTransactionRecord(?, transactionStatuses.Sale, 1);

        // Act
        var result = pointOfSaleDataUtilities.getProductCountBySale([transactionRecord]);

        // Assert
        assert.deepEqual(result, {
            [?]: 1
        });
    });
```

</details>

</details>

##### Remove Guide comments #####

Now remove the comments as they serve no further purpose.

<details><summary>Hints</summary>

Just delete them.

<details><summary>Code</summary>

</details>

```javascript
    it('returns an object with a single count of 1 when only one item, quantity 1 was purchased', () => {
        let transactionRecord = buildTransactionRecord(?, transactionStatuses.Sale, 1);

        let result = pointOfSaleDataUtilities.getProductCountBySale([transactionRecord]);

        assert.deepEqual(result, {
            [?]: 1
        });
    });
```

**Example 2 (`var`)**

```javascript
    it('returns an object with a single count of 1 when only one item, quantity 1 was purchased', () => {
        var transactionRecord = buildTransactionRecord(?, transactionStatuses.Sale, 1);

        var result = pointOfSaleDataUtilities.getProductCountBySale([transactionRecord]);

        assert.deepEqual(result, {
            [?]: 1
        });
    });
```

</details>

#### It returns an object with a single count of 2 when only one item, quantity 2 was purchased ####

The intent of this test is to verify that the `quantity` field of the transaction record is actually used. By writing almost the same test, but differing only in quantity, you can verify that the `quantity` is used in the result.

So now you will create a test that looks very similar to the previous one but will use a quantity of 2.

The process you will follow is:

1. Enable the test
2. Add guide comments
   1. Arrange
   2. Act
   3. Assert
3. Implement the arrange
4. Implement the act
5. Implement the assert
6. Remove Guide comments

However, then only steps this guide will cover for this test are the "Implement" step 3, and then the rest of the code.

##### Implement the Arrange test 3 #####

After enabling the tests and writing the guide comments, you need to use the `buildTransactionRecord` function just like above. The only difference is the last parameter will be a `2` instead of a `1`.

<details><summary>Hints</summary>

Remember then signature for the `buildTransactionRecord` is `buildTransactionRecord(productId, transactionStatus, quantity)`.

You will simply capture the result as a variable.

<details><summary>Code</summary>

**Example 1 (`let`)**

```javascript
    it('returns an object with a single count of 2 when only one item, quantity 2 was purchased', () => {
        // Arrange
        let transactionRecord = buildTransactionRecord(?, transactionStatuses.Sale, 2);

        // Act
        // Assert
    });
```

**Example 2 (`var`)**

```javascript
    it('returns an object with a single count of 2 when only one item, quantity 2 was purchased', () => {
        // Arrange
        var transactionRecord = buildTransactionRecord(?, transactionStatuses.Sale, 2);

        // Act
        // Assert
    });
```

</details>

</details>

##### Finish the Test #####

Now you have done the rest before. Fill in the "Act", the "Assert" and then delete the comments. Remember that you are verifying the value of the result object is `2`.

<details><summary>Hints</summary>

The last two lines of this test should look almost exactly like the test above except with a `2` instead of a 1 for the object value.

<details><summary>Code</summary>

```javascript
    it('returns an object with a single count of 2 when only one item, quantity 2 was purchased', () => {
        let transactionRecord = buildTransactionRecord(?, transactionStatuses.Sale, 2);

        let result = pointOfSaleDataUtilities.getProductCountBySale([transactionRecord]);

        assert.deepEqual(result, {
            [?]: 2
        });
    });
```

**Example 2 (`var`)**

```javascript
    it('returns an object with a single count of 2 when only one item, quantity 2 was purchased', () => {
        var transactionRecord = buildTransactionRecord(?, transactionStatuses.Sale, 2);

        var result = pointOfSaleDataUtilities.getProductCountBySale([transactionRecord]);

        assert.deepEqual(result, {
            [?]: 2
        });
    });
```

</details>

</details>

#### It returns an object with a two counts of 1 when two transactions of 1 qty each are passed ####

Now you will be seeing what happens when you pass 2 different transaction records to the `getProductCountBySale` each one with a different product IDs.

The process you will follow is:

1. Enable the test
2. Add guide comments
   1. Arrange
   2. Act
   3. Assert
3. Implement the arrange
4. Implement the act
5. Implement the assert
6. Remove Guide comments

From this point on we will not cover any of the individual steps, but focus on the outcome of following those steps. Also for simplicity, this guide will only show examples for `let` variable statements as they are slightly more dependable.

What you are going to want to do, is to modify the the test such that you create 2 different transactions records using the `buildTransactionRecord` function.

> Make sure these have different product IDs.

So given:

Product ID 314
and
Product ID 42

then the result should look like:

```javascript
{
    [314]: 1
    [42]: 1
}
```

<details><summary>Hints</summary>

All three parts of the test that change. In the "Arrange" you will want to create the two transactions records.

In the "Act" you will pass both of the transaction records to the `getProductCountBySale` method.

In the "Assert" you want to ensure the resulting object has those record quantities.

<details><summary>Code</summary>

**Example 1 (explicit variables)**

```javascript
    it('returns an object with a two counts of 1 when two transactions of 1 qty each are passed', () => {
        let transactionP1 = buildTransactionRecord(?, transactionStatuses.Sale, 1);
        let transactionP2 = buildTransactionRecord(?, transactionStatuses.Sale, 1);

        let result = pointOfSaleDataUtilities.getProductCountBySale([
            transactionP1,
            transactionP2
        ]);

        assert.deepEqual(result, {
            [?]: 1
            [?]: 1
        });
    });
```

**Example 2 (implicit variables)**

```javascript
    it('returns an object with a two counts of 1 when two transactions of 1 qty each are passed', () => {
        let transactions = [
            buildTransactionRecord(?, transactionStatuses.Sale, 1)
            buildTransactionRecord(?, transactionStatuses.Sale, 1)
        ];

        let result = pointOfSaleDataUtilities.getProductCountBySale(transactions);

        assert.deepEqual(result, {
            [?]: 1
            [?]: 1
        });
    });
```

</details>

</details>

#### It returns an object with a two counts when 4 transactions of two different items are passed ####

The intent of this test is to see if the `getProductCountBySale` method will sum quantities across two different products.

The process you will follow is:

1. Enable the test
2. Add guide comments
   1. Arrange
   2. Act
   3. Assert
3. Implement the arrange
4. Implement the act
5. Implement the assert
6. Remove Guide comments

You will need to create 2 different products, each with two transaction records. The test does not specify what the quantities are, so you will have to determine that.

> **NOTE:** Make sure that the totals of the quantities across both products are different, or else you do not know if the function is summing one and duplicating it.

> **GUIDE:** It would be helpful to create a variable that holds each product ID as you will need that in at least three different places. Also this variable will help make your code more readable.

<details><summary>Hints</summary>

Again all the portions of the test have changed.

In the "Arrange" you will need to create four different transaction records across two different product IDs. You will need to ensure that the totals of the `quantities` across the products are different.

In the "Act", you will be passing all four transaction records to the `getProductCountBySale` method.

In the "Assert" you will verify that then resulting object has only the two product IDs passed and it has the correct summation of their quantities.

<details><summary>Code</summary>

**Example 1 (explicit variables)**

```javascript
    it('returns an object with a two counts when 4 transactions of two different items are passed', () => {
        let product1 = ?; // ID for product 1
        let product2 = ?; // ID for product 2

        let transaction1A = buildTransactionRecord(product1, transactionStatuses.Sale, ?);
        let transaction1B = buildTransactionRecord(product1, transactionStatuses.Sale, ?);
        let transaction2A = buildTransactionRecord(product2, transactionStatuses.Sale, ?);
        let transaction2B = buildTransactionRecord(product2, transactionStatuses.Sale, ?);

        let result = pointOfSaleDataUtilities.getProductCountBySale([
            transaction1A,
            transaction2A,
            transaction1B,
            transaction2B
        ]);

        expect.deepEqual(result, {
            [product1]: ?
            [product2]: ?
        });
    });
```

**Example 1 (implicit variables)**

```javascript
    it('returns an object with a two counts when 4 transactions of two different items are passed', () => {
        let product1 = ?; // ID for product 1
        let product2 = ?; // ID for product 2

        let transactions = [
            buildTransactionRecord(product1, transactionStatuses.Sale, ?),
            buildTransactionRecord(product2, transactionStatuses.Sale, ?),
            buildTransactionRecord(product1, transactionStatuses.Sale, ?),
            buildTransactionRecord(product2, transactionStatuses.Sale, ?),
        ];

        let result = pointOfSaleDataUtilities.getProductCountBySale(transactions);

        expect.deepEqual(result, {
            [product1]: ?
            [product2]: ?
        });
    });
```

</details>

</details>

#### It returns counts only for sales, ignoring returns ####

The last test of the `getProductCountBySale` method is to ensure that it does not count returns.

The process you will follow is:

1. Enable the test
2. Add guide comments
   1. Arrange
   2. Act
   3. Assert
3. Implement the arrange
4. Implement the act
5. Implement the assert
6. Remove Guide comments

You will need at least 2 transaction records. One that is a Sale and one that is a Return, they can have the same product ID or different ones.

You will need to use `transactionStatuses.Return` to set the type for the return transaction.

<details><summary>Hints</summary>

In the "Arrange" you will need to create both a Sale and a Return.

<details><summary>Code</summary>

**Example 1 (explicit, diff IDs)**

```javascript
    it('returns counts only for sales, ignoring returns', () => {
        let saleTransaction = buildTransactionRecord(?, transactionStatuses.Sale, ?);
        let returnTransaction = buildTransactionRecord(?, transactionStatuses.Return, ?);

        let result = pointOfSaleDataUtilities.getProductCountBySale([returnTransaction, saleTransaction]);

        assert.deepEqual(result, {
            [?]: ?
        });
    });
```

**Example 2 (explicit, same IDs)**

```javascript
    it('returns counts only for sales, ignoring returns', () => {
        let productId = ?;
        let saleTransaction = buildTransactionRecord(productId, transactionStatuses.Sale, ?);
        let returnTransaction = buildTransactionRecord(productId, transactionStatuses.Return, ?);

        let result = pointOfSaleDataUtilities.getProductCountBySale([returnTransaction, saleTransaction]);

        assert.deepEqual(result, {
            [productId]: ?
        });
    });
```

**Example 3 (implicit, diff IDs)**

```javascript
    it('returns counts only for sales, ignoring returns', () => {
        let transactions = [
            buildTransactionRecord(?, transactionStatuses.Return, ?),
            buildTransactionRecord(?, transactionStatuses.Sale, ?),
        ];

        let result = pointOfSaleDataUtilities.getProductCountBySale(transactions);

        assert.deepEqual(result, {
            [?]: ?
        });
    });
```

**Example 4 (implicit, same IDs)**

```javascript
    it('returns counts only for sales, ignoring returns', () => {
        let productId = ?;
        let transactions = [
            buildTransactionRecord(productId, transactionStatuses.Return, ?),
            buildTransactionRecord(productId, transactionStatuses.Sale, ?),
        ];

        let result = pointOfSaleDataUtilities.getProductCountBySale([returnTransaction, saleTransaction]);

        assert.deepEqual(result, {
            [productId]: ?
        });
    });
```

</details>

</details>
    

### Get Product Count by Return Status ###

#### It returns with counts only for return transactions ####

There is only one test to this section. The reason is if you look at the file [pointOfSaleDataUtilsFactory.js](../jsforms-source/4_test-dummy-form/pos-transaction-services/pointOfSaleDataUtilsFactory.js) you will see that the only difference between `getProductCountBySale` and `getProductCountByReturn` is a value passed to a second parameter of a method called underneath. So in regard to returns we just need to prove that the function can count them.

The process you will follow is:

1. Enable the test
2. Add guide comments
   1. Arrange
   2. Act
   3. Assert
3. Implement the arrange
4. Implement the act
5. Implement the assert
6. Remove Guide comments

You will want to create 2 returns, and a third for a sale.

<details><summary>Hints</summary>

In the "Arrange" you will be creating 3 different transaction reports. Two will be returns and the third will be for a sale. You can choose, if you want any of these to share IDs.

<details><summary>Code</summary>

**Example (explicit, diff ids)**

```javascript
    it('returns with counts only for return transactions', () => {
        let saleTransaction = buildTransactionRecord(?, transactionStatuses.Sale, ?);
        let return1 = buildTransactionRecord(?, transactionStatuses.Return, ?);
        let return2 = buildTransactionRecord(?, transactionStatuses.Return, ?);

        let result = pointOfSaleDataUtilities.getProductCountBySale([
            return1,
            saleTransaction,
            return2,
        ]);

        assert.deepEqual(result, {
            [?]: ?,
            [?]: ?,
        });
    });
```

**Example (explicit, returns share ID)**

```javascript
    it('returns with counts only for return transactions', () => {
        let returnProduct = ?;
        let saleTransaction = buildTransactionRecord(?, transactionStatuses.Sale, ?);
        let return1 = buildTransactionRecord(returnProduct, transactionStatuses.Return, ?);
        let return2 = buildTransactionRecord(returnProduct, transactionStatuses.Return, ?);

        let result = pointOfSaleDataUtilities.getProductCountBySale([
            return1,
            saleTransaction,
            return2,
        ]);

        assert.deepEqual(result, {
            [returnProduct]: ?,
        });
    });
```

**Example (explict, all share ID)**

```javascript
    it('returns with counts only for return transactions', () => {
        let productId = ?;
        let saleTransaction = buildTransactionRecord(productId, transactionStatuses.Sale, ?);
        let return1 = buildTransactionRecord(productId, transactionStatuses.Return, ?);
        let return2 = buildTransactionRecord(productId, transactionStatuses.Return, ?);

        let result = pointOfSaleDataUtilities.getProductCountBySale([
            return1,
            saleTransaction,
            return2,
        ]);

        assert.deepEqual(result, {
            [productId]: ?,
        });
    });
```

**Example (implicit, diff ids)**

```javascript
    it('returns with counts only for return transactions', () => {
        let transactions = [
            buildTransactionRecord(?, transactionStatuses.Return, ?),
            buildTransactionRecord(?, transactionStatuses.Sale, ?),
            buildTransactionRecord(?, transactionStatuses.Return, ?),
        ];

        let result = pointOfSaleDataUtilities.getProductCountBySale(transactions);

        assert.deepEqual(result, {
            [?]: ?,
            [?]: ?,
        });
    });
```

**Example (implicit, returns share ID)**

```javascript
    it('returns with counts only for return transactions', () => {
        let returnProduct = ?;
        let transactions = [
            buildTransactionRecord(returnProduct, transactionStatuses.Return, ?),
            buildTransactionRecord(?, transactionStatuses.Sale, ?),
            buildTransactionRecord(returnProduct, transactionStatuses.Return, ?),
        ];

        let result = pointOfSaleDataUtilities.getProductCountBySale(transactions);

        assert.deepEqual(result, {
            [returnProduct]: ?,
        });
    });
```

**Example (implicit, all share ID)**

```javascript
    it('returns with counts only for return transactions', () => {
        let productId = ?;
        let transactions = [
            buildTransactionRecord(productId, transactionStatuses.Return, ?),
            buildTransactionRecord(productId, transactionStatuses.Sale, ?),
            buildTransactionRecord(productId, transactionStatuses.Return, ?),
        ];

        let result = pointOfSaleDataUtilities.getProductCountBySale([
            return1,
            saleTransaction,
            return2,
        ]);

        assert.deepEqual(result, {
            [productId]: ?,
        });
    });
```

</details>

</details>
    
    

## Get Report ##

In testing the `getReport` function, you will be required to do a lot more of the initial work. Fortunately you have the code from the "get product count by sale" test suite you just finished.

The `getReport` function can either create a Sales report or a Returns report.

### Sales Report &mdash; Important Files ###

Test File:

> test/[4_test-dummy-form.test.js](../test/4_test-dummy-form.test.js)

Files Under Test:

> jsforms-source/4_test-dummy-form/sales-reporter/[salesReporterFactory.js](../jsforms-source/4_test-dummy-form/sales-reporter/salesReporterFactory.js)
> jsforms-source/4_test-dummy-form/pos-transaction-services/[reportDataBuilder.js](../jsforms-source/4_test-dummy-form/pos-transaction-services/reportDataBuilder.js)

Helpers File:

> test/form-helpers/[4_test-dummy-helpers.js](../test/form-helpers/4_test-dummy-helpers.js)
    

### Get Sales Report ###

You will be focusing on testing that a sales report is created correctly. In creating these tests you will follow the basic steps listed bellow.

1. Write the first test.
2. Write the second test.
3. Refactor tests to remove repetitive code into a `beforeEach` block.
4. Finish writing tests, stopping periodically to refactor as needed.

Now when you write each test, you will follow the process you did before with one additional step.

1. Enable the test
2. Add guide comments
3. Implement the arrange
4. Implement the act
5. Implement the assert
6. Remove Guide comments
7. Refactor code if possible

#### It returns a report of sales with no sales ####

Starting with a base case of there were no sales, you will write the test that proves that it returns a report with nothing in it.

To test the `getReport` function you will need to first call the `salesReporterFactory` function. The `salesReporterFactory` has the following signature:

```javascript
function salesReporterFactory(
    dataLoader,
    pointOfSaleDataUtilsFactory,
    reportDataBuilderFactory
)
```

You will have to create a fake `dataLoader`. You will also  use the `pointOfSaleDataUtilsFactory` and the `reportDataBuilderFactory` that are already available to the test.

This will return an empty array.

To write this test follow these steps.

1. Enable the test
2. Add guide comments
   1. Arrange
   2. Act
   3. Assert
3. Implement the arrange
4. Implement the act
5. Implement the assert
6. Remove Guide comments

<details><summary>Data Loader Hints</summary>

The `dataLoader` has 3 functions and the following structure:

```javascript
{
    getProductData,
    getTransactionData,
    getTransactionStatuses
}
```

The `getProductData` will be set to the `buildProductData` helper function. The `getTransactionStatuses` will be set to the `buildTransactionStatuses` helper function.

The real odd ball here is the `getTransactionData` which is expected to return an array of transaction records. You will have to create this function, and have it return an empty array.

<details><summary>Code</summary>

**Example**

```javascript
    let dataLoader = {
        getProductData: buildProductData,
        getTransactionData: () => [],
        getTransactionStatuses: buildTransactionStatuses
    };
```

</details>

</details>

<details><summary>Hints</summary>

You just have to pass the values to the function, and capture the returned function. You will then have to call that function with a "Sale" transactionStatus.

<details><summary>Code</summary>

```javascript
it('returns an empty object for sale counts if no sale data exists', () => {
    // Arrange
    let dataLoader = {
        getProductData: buildProductData,
        getTransactionData: () => [],
        getTransactionStatuses: buildTransactionStatuses
    };

    let { getReport } = salesReporterFactory(dataLoader, pointOfSaleDataUtilsFactory, reportDataBuilderFactory);

    // Act
    let result = getReport(transactionStatuses.Sale);

    // Assert
    assert.deepEqual(result, []);
});
```

</details>

</details>

#### It returns a report of sales with one sale ####

Okay, the last test did a lot of heavy lifting for you. Now you will test the `getReport` function for a sales report with only one item sold.

The biggest change between this test and the previous one is that the `getTransactionData` needs to return a single transaction record that has a `quantity` of `1`.

The `getReport` function will return an array containing a single object with the following structure:

```javascript
{
    productName, // string -- Name of product, from productDatum.Name
    quantity, // integer number -- count sold or returned, total of transactionData.quantity
    total // number -- the sales price for a single item of this product quantity * productDatum.price
}
```

To write this test follow these steps.

1. Enable the test
2. Add guide comments
   1. Arrange
   2. Act
   3. Assert
3. Implement the arrange
4. Implement the act
5. Implement the assert
6. Remove Guide comments

<details><summary>Arrange Hints</summary>

You are going to setup the `dataLoader` the same way as you did before. But again the odd item out is the `getTransactionData` function because this needs to return an array with a single transaction record for a sale.

The key here is that the transaction record `productId` needs to match one of the products returned from `getProductData`. The `transactionStatus` needs to match the `Sale` property on the `transactionStatuses` object. You will need to use the `buildTransactionRecord` function to create this record.

<details><summary>Code</summary>

**Example**

```javascript
// Arrange
let dataLoader = {
    getProductData: buildProductData,
    getTransactionData: () => [
        buildTransactionRecord(?, transactionStatuses.Sale, 1)
    ],
    getTransactionStatuses: buildTransactionStatuses
};

let { getReport } = salesReporterFactory(dataLoader, pointOfSaleDataUtilsFactory, reportDataBuilderFactory);
```

</details>

</details>

<details><summary>Hints</summary>

Once you have the `dataLoader` created, you will need to only change the Assert part of the code. Remember the `total` in the result is the product's `price`.

<details><summary>Code</summary>

**Example**

```javascript
it('returns a report of sales with one sale', () => {
    // Arrange
    let dataLoader = {
        getProductData: buildProductData,
        getTransactionData: () => [
            buildTransactionRecord(?, transactionStatuses.Sale, 1)
        ],
        getTransactionStatuses: buildTransactionStatuses
    };

    let { getReport } = salesReporterFactory(dataLoader, pointOfSaleDataUtilsFactory, reportDataBuilderFactory);

    // Act
    let result = getReport(transactionStatuses.Sale);

    // Assert
    assert.deepEqual(result, [{
        productName: ?,
        quantity: ?,
        total: ?
    }]);
});
```

</details>

</details>

#### Refactor Sales Report Tests ####

You have introduced a lot of duplication. And moreover the duplication in the "Arrange" part of your tests is most likely needed for the rest of the tests. As such, it is time you simplify your tests.

A lot of JavaScript test frameworks use a construct called `beforeEach` that creates a function that is run just before each test. This allows you to setup common variables. These variables will be test suite scoped variables.

> **<div style="color:red">WARNING</div>**
>
> <div style="color:red">You must be careful when using a test suite scoped variables as you can accidentally cause one test to effect another. To prevent this, you must reset all such variables to an initial value in the beforeEach. </div>

##### Refactor Sales Report Tests Create the Before Each #####

You need to create the `getReport` function in the `beforeEach` section. However, in order for this to work you will also need to create and assign a variable to hold the transaction records. This way you can add an item to it in the second test.

<details><summary>Hints</summary>

You will need to create two variables before the "get sales report" section. One to hold the `getReport` function and the other to hold the transaction records.

Bellow those, but still before the "get sales report" section, you will need to create the `beforeEach` section.

<details><summary>Code</summary>

**Example**

```javascript
    describe('get report', function () {
        // files being tested are:
        //      ../jsforms-source/4_test-dummy-form/sales-reporter/salesReporterFactory.js
        //      ../jsforms-source/4_test-dummy-form/pos-transaction-services/reportDataBuilder.js

        let reportBuilder;
        let transactionRecords;

        beforeEach(() => {
            transactionRecords = [];
            let dataLoader = {
                getProductData: buildProductData,
                getTransactionData: () => transactionRecords,
                getTransactionStatuses: buildTransactionStatuses
            };

            let { getReport } =
                salesReporterFactory(dataLoader, pointOfSaleDataUtilsFactory, reportDataBuilderFactory);

            reportBuilder = getReport;
        });

        describe('get sales report', function () {
```

</details>

</details>

##### Refactor Sales Report Tests Modify the First Test #####

You need to change the first test, "returns a report of sales with no sales", so that it uses the new suite level variables.

<details><summary>Hints</summary>

The whole arrange is now being done in the `beforeEach`. So delete that and use the variable that is holding the `getReport` function.

<details><summary>Code</summary>

**Example**

```javascript
    describe('get report', function () {
        // files being tested are:
        //      ../jsforms-source/4_test-dummy-form/sales-reporter/salesReporterFactory.js
        //      ../jsforms-source/4_test-dummy-form/pos-transaction-services/reportDataBuilder.js

        let reportBuilder;
        let transactionRecords;

        beforeEach(() => {
            transactionRecords = [];
            let dataLoader = {
                getProductData: buildProductData,
                getTransactionData: () => transactionRecords,
                getTransactionStatuses: buildTransactionStatuses
            };

            let { getReport } =
                salesReporterFactory(dataLoader, pointOfSaleDataUtilsFactory, reportDataBuilderFactory);

            reportBuilder = getReport;
        });

        describe('get sales report', function () {
            it('returns an empty object for sale counts if no sale data exists', () => {
                let result = reportBuilder(transactionStatuses.Sale);

                assert.deepEqual(result, []);
            });
```

</details>

</details>

##### Refactor Sales Report Tests Modify the Second Test #####

The second test has more to it. You still have an arrange that is specific to the test. You need to add the transaction record to the variable used to store the transaction records. You might be able to use the [`Array.prototype.push`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method.

<details><summary>Hints</summary>

Most of the arrange in this test can be deleted. You will just need to add the sales transaction record to the array before calling the `getReport` function.

<details><summary>Code</summary>

**Example**

```javascript
        let reportBuilder;
        let transactionRecords;

        beforeEach(() => {
            transactionRecords = [];
            let dataLoader = {
                getProductData: buildProductData,
                getTransactionData: () => transactionRecords,
                getTransactionStatuses: buildTransactionStatuses
            };

            let { getReport } =
                salesReporterFactory(dataLoader, pointOfSaleDataUtilsFactory, reportDataBuilderFactory);

            reportBuilder = getReport;
        });

        describe('get sales report', function () {

            // ...

            it('returns a report of sales with one sale', () => {
                transactionRecords.push(buildTransactionRecord(?, transactionStatuses.Sale, 1));

                let result = reportBuilder(transactionStatuses.Sale);

                assert.deepEqual(result, [{
                    productName: ?,
                    quantity: ?,
                    total: ?
                }]);
            });
```

</details>

</details>

#### It returns a report of sales with two sales of different products ####

Now you will test that the `getReport` can return a report with two different products.

This will look very similar to the above test, but you will need to add two products, with different quantities to the transaction records.

To write this test follow these steps.

1. Enable the test
2. Add guide comments
   1. Arrange
   2. Act
   3. Assert
3. Implement the arrange
4. Implement the act
5. Implement the assert
6. Remove Guide comments
7. Refactor code if possible

<details><summary>Hints</summary>

Add the two different products to the transaction records. Make sure that the `productId` of each maps to a product that is returned by the `buildProductData` function. You will also want each product to have a different non-one `quantity` value.

You will also have two objects in the result to test for.

<details><summary>Code</summary>

**Example**

```javascript
it('returns a report of sales with two sales of different products', () => {
    transactionRecords.push(buildTransactionRecord(?, transactionStatuses.Sale, ?));
    transactionRecords.push(buildTransactionRecord(?, transactionStatuses.Sale, ?));

    let result = reportBuilder(transactionStatuses.Sale);

    assert.deepEqual(result, [
        {
            productName: ?, // The name that maps to the first product ID
            quantity: ?, // The quantity of the first transaction record
            total: ? // the price from the first product multiplied by te quantity
        },
        {
            productName: ?, // The name that maps to the second product ID
            quantity: ?, // The quantity of the second transaction record
            total: ? // the price from the second product multiplied by the quantity
        },
    ]);
});
```

</details>

</details>

#### It returns a report of sales with two sales of the same product ####

You will test what happens if the transaction records have two different transactions for the sale of the same product. The result should represent the total of the quantity.

To write this test follow these steps.

1. Enable the test
2. Add guide comments
   1. Arrange
   2. Act
   3. Assert
3. Implement the arrange
4. Implement the act
5. Implement the assert
6. Remove Guide comments
7. Refactor code if possible

<details><summary>Hints</summary>

This test will look very similar to the above with the difference that the two transaction records will share the same `productId`.

There will only be a single object in the result.

<details><summary>Code</summary>

**Example**

```javascript
it('returns a report of sales with two sales of the same product', () => {
    let productId = ?;
    transactionRecords.push(buildTransactionRecord(productId, transactionStatuses.Sale, ?));
    transactionRecords.push(buildTransactionRecord(productId, transactionStatuses.Sale, ?));

    let result = reportBuilder(transactionStatuses.Sale);

    assert.deepEqual(result, [
        {
            productName: ?, // The name that maps to the product ID
            quantity: ?, // The total quantity of the transaction records
            total: ? // the price from the product multiplied by the total quantity
        },
    ]);
});
```

</details>

</details>

#### It returns a report of sales excluding any return transactions ####

Now, you will verify that the `getReport` function filters according to the Sale transaction status.

You will want to create a number of sale transactions, at least 3 across at least two products, with one or more return transactions mixed into the bunch.

To write this test follow these steps.

1. Enable the test
2. Add guide comments
   1. Arrange
   2. Act
   3. Assert
3. Implement the arrange
4. Implement the act
5. Implement the assert
6. Remove Guide comments
7. Refactor code if possible

<details><summary>Hints</summary>

You are going to create the test very similarly to two tests ago, but you will add a new transaction record that has the `transactionStatus` equal to Return.

<details><summary>Code</summary>

**Example**

```javascript
it('returns a report of sales excluding any return transactions', () => {
    transactionRecords.push(buildTransactionRecord(?, transactionStatuses.Sale, ?));
    transactionRecords.push(buildTransactionRecord(?, transactionStatuses.Return, ?)); // This is the record that is not going to be counted
    transactionRecords.push(buildTransactionRecord(?, transactionStatuses.Sale, ?));

    let result = reportBuilder(transactionStatuses.Sale);

    assert.deepEqual(result, [
        {
            productName: ?, // The name that maps to the first product ID
            quantity: ?, // The quantity of the first transaction record
            total: ? // the price from the first product multiplied by te quantity
        },
        {
            productName: ?, // The name that maps to the third product ID
            quantity: ?, // The quantity of the third transaction record
            total: ? // the price from the third product multiplied by the quantity
        },
    ]);
});
```

</details>

</details>
    

### Get Returns Report ###

There is little to do in testing the "Returns" report because if you look at the code, it is almost entirely the same code as what creates the "Sales" report. So the only thing we have to do is test that it correctly filters when we ask for a report of the "Returns".

#### It returns a report of return transactions that excludes sales transactions ####

You will now create a test that will verify that the report is correct when you ask for it to give you a report of the returns.

You will want at least three different transactions records that are composed of at least two different product IDs. You will want one of those records to be a Sale and the rest to be Returns.

You will then verify that the resulting object has the correct products, quantities, and prices.

Remember to pass `transactionStatuses.Return` to the `getReport` function.

To write this test follow these steps.

1. Enable the test
2. Add guide comments
   1. Arrange
   2. Act
   3. Assert
3. Implement the arrange
4. Implement the act
5. Implement the assert
6. Remove Guide comments
7. Refactor code if possible

<details><summary>Hints</summary>

This will look very much like the last test but the transaction statuses are swapped.

<details><summary>Code</summary>

**Example**

```javascript
describe('get returns report', function () {
    it('returns a report of return transactions that excludes sales transactions', () => {
        transactionRecords.push(buildTransactionRecord(?, transactionStatuses.Return, ?));
        transactionRecords.push(buildTransactionRecord(?, transactionStatuses.Sale, ?)); // This is the record that is not going to be counted
        transactionRecords.push(buildTransactionRecord(?, transactionStatuses.Return, ?));

        let result = reportBuilder(transactionStatuses.Return);

        assert.deepEqual(result, [
            {
                productName: ?, // The name that maps to the first product ID
                quantity: ?, // The quantity of the first transaction record
                total: ? // the price from the first product multiplied by te quantity
            },
            {
                productName: ?, // The name that maps to the third product ID
                quantity: ?, // The quantity of the third transaction record
                total: ? // the price from the third product multiplied by the quantity
            },
        ]);

    });
});
```

</details>

</details>
    
    

## TDB ##
<!-- GENERATED DOCUMENT! DO NOT EDIT! -->
    