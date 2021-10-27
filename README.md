# ember-data-has-many-troubles

It seems like there is a regression from version Ember Data 3.27.1 to 3.28 when requesting a model simultaneously.

I tried to create a repo which could demonstrate the problem. Be aware that this is only assumptions and that I don't know if it's really a bug or a user error or whatever. So please take everything I write here with a grain of salt (because it could be totally wrong as well).

From my point of view it boils down to the following code:

```typescript
// taken from the file: app/routes/catalog.js

const catalogPromise = this.store.findRecord('catalog', 'usm');

// This "later" just mimics what happens in our app somewhere else.
// It's a huge app and the catalog is a central model so we
// need it in several places, therefore it can happen that
// there are two simultaneous calls to try to find a specific
// catalog
later(async () => {
  const catalog = await this.store.findRecord('catalog', 'usm');
  console.log(catalog);
}, 1500);
```

Since our app is grown over 5 years and the catalog model is a very central model it could happen that we request it on several places at the same time. It seems like if the calls are simultaneous the method `updateRelationshipOperation` is called for each simultaneous call and the second call to `updateRelationshipOperation` results in `false` for `relatedLink && relatedLink.href && relatedLink.href !== currentLinkHref` so `hasUpdatedLink` becomes false and furthermore the `isStale` property is set to false. This leads to the problem that the relationships are not loaded if you actually request them.

I created a screencast to demonstrate the issue.

You can find the screencast for [3.28.3 here](./reproduction-behavior-3.28.3.mov)

the screencast for [3.27.1 is here](./reproduction-behavior-3.27.1.mov)
