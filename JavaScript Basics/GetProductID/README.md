# Get Product ID

Create the function getProductId that extracts the product ID from a given product page URL in your online shop. Here's how the URLs are structured:

The domain exampleshop.com comes first.
Next is the product name, where words are separated by dashes (-).
A letter p follows, marking the start of the product ID.
The product ID itself comes next (its length can vary).
Lastly, there's an 8-digit date (format: ddmmyyyy) indicating when the product was added, followed by .html.
The function should return the product ID as a string.
...and a few examples:

<https://app.knowely.com/study/full-stask-dev-en/js-basics-extended-en/js-extended-extra?section=practice&testTaskSlug=js_get_product_id&learnItemsFilter=All&theoryId=1428>

Keep in mind:

The product name might also include the letter p and digits.
Make sure your function returns the product ID as a string.
All provided URLs will follow the format described above.
