---
layout: post
title:  "Emoji in SQL - SELECT 🗣 FROM 👤"
date:   2017-06-26 13:00:00
comments: true
excerpt: I had a doubt, can you use Emoji in SQL? Turns out you can, and it works very well.
---

<script src="//twemoji.maxcdn.com/2/twemoji.min.js?2.3.0"></script>
<script>
window.onload = function() {
  twemoji.size = '72x72';
  twemoji.parse(document.body);
}
</script>
<style>
img.emoji {
	margin: 0px !important;
	display: inline !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .05em 0 .1em !important;
	vertical-align: -0.1em !important;
}
.highlight .err {
	color: black !important;
	background-color: transparent !important;
}

</style>

> **WARNING** Don't try this at ~~home~~ work: just because you can do it, it does not mean you should do it. Also don't take the post too seriously.

Yesterday I had a doubt: can you use Emoji in SQL? No, I don't mean storing Emoji in a `TEXT` column, I mean using Emoji for naming databases, tables, columns. Turns out you can (at least on SQL implementations I tried, **SQLite** and **PostgreSQL 9.6**) and it works very well.

It is not magic, Emoji are Unicode characters and you can use Unicode characters inside SQL names.

## CREATE TABLE 👤

I decided to re-implement the classic "Public Library" database we all built when learning SQL. Yes, *that* one database we have practiced on at school, storing users, books, authors and keeping tracks of Books read by users.

First of all let's create the database, since we are working with a library we will call it 📚.

```sql
CREATE DATABASE 📚;
USE 📚; -- \c 📚 in PostgreSQL
```

Then we begin by creating the users table:

```sql
CREATE TABLE 👤(
	🔑 INTEGER PRIMARY KEY,
	🗣 varchar(64), -- name
	🗓 DATE -- date of registration
);
```

As you can see using Emoji solves the classical naming problem you have when programming: waste no more time on "Should I call the table `User` or `Users`?", just use 👤.

Let's keep build the database by adding the table for the authors:

```sql
CREATE TABLE ✍(
	🔑 INTEGER PRIMARY KEY,
	🗣 varchar(64)
);
```

And a table for the books:

```sql
CREATE TABLE 📕(
	🔑 INTEGER PRIMARY KEY,
	💬 varchar(64), -- title
	🔖 varchar(64), -- genre/tag
	✍ INTEGER REFERENCES ✍(🔑) -- who wrote the book?
);
```

Finally let's create a table for storing which books were read by which user.

We will use the instantly recognizable name 👤🏠📕 for this table, which as we all know stands for "User took the Book home": it is that easy.

```sql
CREATE TABLE 👤🏠📕(
	👤 INTEGER REFERENCES 👤(🔑),
	📕 INTEGER REFERENCES 📕(🔑)
);
```

## Populating the database

This is the boring bit, just the classic `INSERT INTO`s.

```sql
INSERT INTO 👤 VALUES
	(1, 'Jeff', CURRENT_DATE),
	(2, 'Annie', CURRENT_DATE);

INSERT INTO ✍ VALUES
	(1, 'Herman Melville'),
	(2, 'Lewis Carroll');

INSERT INTO 📕 VALUES
	(1, 'Alice in Wonderland', '🔮', 2), -- genre is fantasy
	(2, 'Moby Dick', '📖', 1), -- genre is novel
	(3, 'Through the Looking-Glass', '🔮', 2); -- genre is fantasy

INSERT INTO 👤🏠📕 VALUES
	(1, 1), -- Jeff took home 'Alice in Wonderland'
	(1, 2), -- Jeff took home 'Moby Dick'
	(2, 2);	-- Annie took home 'Moby Dick'
```

## Queries

One common task when dealing with this database is finding out which books were read by which users. The query by itself is simple but using Emoji is even simpler: you visualize concepts not names.

```sql
-- get the book taken home by each people
SELECT 👤.🗣 AS 👤, 📕.💬 AS 📕
FROM 👤 JOIN 👤🏠📕 ON 👤.🔑 = 👤🏠📕.👤
	JOIN 📕 ON 📕.🔑 = 👤🏠📕.📕;
```

which results in:

```
   👤  |         📕
-------+---------------------
 Jeff  | Alice in Wonderland
 Jeff  | Moby Dick
 Annie | Moby Dick
```

## Extending the concept

We want to extend our `📕` table to also store how long each book is. The naive solution would be to use an INTEGER field to solve the problem, but sometimes numbers are confusing, in these times Emoji are here to help.

To help us simplify the concept of book length we will use a custom `TYPE` (n.d.r: custom `TYPE`s are not available in SQLite).

```sql
CREATE TYPE 📄 AS ENUM ('📄', '📄📄', '📄📄📄', '📄📄📄📄');
```

The longer the book the more 📄 it will have.

Let's update the `📕` table.

```sql
ALTER TABLE 📕
	ADD COLUMN 🔢📄 📄 DEFAULT '📄';

INSERT INTO 📕 VALUES
	(4, 'Example Book', '🔮', 1, '📄📄📄');
```

It is pretty easy to select long books (You may ask "What is the definition of long?", the answer is simple, more than 2 📄):

```sql
SELECT * FROM 📕 WHERE 📕.🔢📄 > '📄📄';
```

Resulting in:

```
🔑 |      💬       | 🔖 | ✍ | 🔢📄
---+---------------+----+---+-------
 4 | Example Book  | 📖 | 1 | 📄📄📄
```

## Rating

We also want the possibility for the users to rate books.

Ideally we would want to implement a rating scale: for example a number from 1 to 10. But we all know that you can't really communicate how you feel about a book with just a number, that's why we need Emoji.

```sql
CREATE TYPE ⭐ AS ENUM ('🤢', '☹', '😐', '🙂', '😍');

ALTER TABLE 👤🏠📕
	ADD COLUMN ⭐ ⭐;
```

We then add some fake data:

```sql
INSERT INTO 👤🏠📕 VALUES
	(1, 4, '😍'), -- Jeff took home 'Example Book' and rated it 😍
	(2, 3, '🙂'), -- Annie took home 'Through the Looking-Glass' and rated it 🙂
	(2, 4, '😍'), -- Annie took home 'Example Book' and rated it 😍
	(2, 4, '🤢'); -- Annie took home 'Example Book' (yes again) and rated it 🤢
```

And we can finally get some meaningful info.

```sql
-- select the ratings for 'Example Book'
SELECT 👤🏠📕.⭐
FROM 👤🏠📕 JOIN 📕 ON 👤🏠📕.📕 = 📕.🔑
WHERE 📕.💬 = 'Example Book';
```

```
 ⭐
---
 😍
 😍
 🤢
```

This next query is useful for the frontend, just display the Emoji instead of some over complicated visualization logic for the rating:

```sql
-- select the most common rating for each book
-- MODE() is another function exclusive to PostgreSQL
--- https://wiki.postgresql.org/wiki/Aggregate_Mode
SELECT 📕.💬, MODE() WITHIN GROUP (ORDER BY 👤🏠📕.⭐) AS MostCommonRating
FROM 👤🏠📕 JOIN 📕 ON 👤🏠📕.📕 = 📕.🔑
GROUP BY  📕.🔑;
```

```
             💬            | mostcommonrating
---------------------------+------------------
 Alice in Wonderland       | NULL
 Moby Dick                 | NULL
 Through the Looking-Glass | 🙂
 Example Book              | 😍

```

## What's next?

It would be even cooler if we could write queries in this format, but I don't see this as a possibility without the cooperation from the major SQL DBMS.

```sql
🔎 * 			-- SELECT *
➡️ 📕 			-- FROM Book
❓ 📕.💬 = "Moby Dick"  -- WHERE Book.Title = "Moby Dick"
```

On a serious note, I had the idea to write a comparator function that given two modified/composite Emoji (such as 🎅🏿 and 🎅🏻) would return TRUE if the two Emoji belong to the same unmodified Emoji: I did not want to waste much more time on this so I skipped it.

I think it would be pretty trivial to do, since a modified/composite Emoji is just two Unicode characters one after another, so getting the first character from both Emoji and checking equality should be enough.

If someone implements this please let me know.

## Summing up

Please don't take this post seriously. I had fun writing it and I hope you had fun too reading it. The SQL code is [available here](https://gist.github.com/crisbal/f072ecb8d43a8ecc58dda968e88417bb): use it wisely.
