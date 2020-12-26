# Sequelize Associations & Magic Methods
[[Study Web Development - Fullstack]]
[[20200814]]

#use/databases
#study/dataStructures
#use/javascript

[Sequelize Associations & Magic Methods](https://medium.com/@julianne.marik/sequelize-associations-magic-methods-c72008db91c9)

![](Sequelize%20Associations%20&%20Magic%20Methods/1*48kzVe-EZ7AfOldETv2Wig.png)

![](Sequelize%20Associations%20&%20Magic%20Methods/_1*48kzVe-EZ7AfOldETv2Wig.png)
The objective of this article is to provide more understandable (visual) documentation on Sequelize associations and magic methods. If you’re new to Sequelize and/or relational databases, take a look at these articles ( [here](https://medium.com/@kimtnguyen/relational-database-schema-design-overview-70e447ff66f9) and [here](https://milinaudara.wordpress.com/2014/05/24/an-introduction-to-sequelize-js/) ) for some background information.

## Motivation

When implementing a backend database, Sequelize is a powerful and effective object relational mapping (ORM) platform. Some of its capabilities, however, are obscured by pages of deterring and dense documentation. When I was first learning Sequelize, I struggled to understand model associations and their respective “magic methods”.

## Associations & Magic Methods

An association in Sequelize is a relationship between two models (a source and target model). Creating an association generally involves adding a foreign key to one model which creates a reference to the other. There are several Sequelize associations, including _has one_,_belongsTo_,_hasMany_, and _belongsToMany._ In terms of implementation, the key difference between these associations is in which model (the source or the target) the foreign key resides. I’ve made a series of visualization tools (see below) to help differentiate between these associations.

“Magic methods” are simply methods that are generated by defining Sequelize associations. As their name implies, the capabilities they invoke are quite magical. The visualizations below also outline which magic methods a given association will create. Alternatively, another way to easily see what magic methods a model has access to, is to use:

## Starting Point

For the purpose of this demonstration, I will begin with two base models — a parent and a child model. The tables below show how the 4 Sequelize associations mentioned above affect these base models, and what magic methods are created as a result.

![](Sequelize%20Associations%20&%20Magic%20Methods/1*j3wdJKebBT1OPoapFfR85w.png)
## One-To-One

One-to-one associations are between exactly two models connected by a single foreign key.

## Belongs To

Associations where the foreign key exists on the **source model**

![](Sequelize%20Associations%20&%20Magic%20Methods/1*lci7SZH17wz8aF5DwYY_qw.png)
One-to-One Association: Belongs To

Associations where the foreign key exists on the **target model**

![](Sequelize%20Associations%20&%20Magic%20Methods/1*d8msBpBzf1Y24TS7sU8nWQ.png)
One-to-One Association: Has One

One-to-Many associations connect one source with multiple targets. The targets however, are connected to exactly one specific source.

## Has Many

![](Sequelize%20Associations%20&%20Magic%20Methods/1*uT2LZf1upseDWOiryFuOwA.png)
One-to-Many Association — Has M

Many-to-Many associations connect one source with many targets. The targets can also be connected to many sources.

## Belongs To Many

Unlike the 3 previous associations, belongsToMany associations create a new joint table with the foreign keys of the target and source models.

![](Sequelize%20Associations%20&%20Magic%20Methods/1*hSOTKFg61dfS9WVQw487_g.png)

I hope these visualizations clarify the distinct differences between Sequelize associations and their corresponding magic methods. Once you understand these differences, Sequelize is extremely powerful in establishing relational databases and querying data.
