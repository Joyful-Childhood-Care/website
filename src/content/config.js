import { defineCollection, z } from 'astro:content';
import cms_collections from '../../public/admin/collections.json';

// Base Astro Collections
const rtn = {};

// Parse each of the CMS collections
cms_collections.forEach((c) => {

  // Define the schema based on the collection fields
  const s = {};
  c.fields.forEach((f) => {
    let n = f.name;
    let w = f.widget;
    let v;
    if ( w === 'string' ) v = z.string();
    if ( w === 'datetime' ) v = z.date();
    if ( w === 'boolean' ) v = z.boolean();
    if ( w === 'select' ) v = z.string();
    if ( w === 'list' ) v = z.string().array();
    if ( w === 'image' ) v = z.string();
    if ( v && n !== 'body' ) s[n] =  !f.required ? v.optional() : v;
  });

  // Define the Astro collection
  rtn[c.name] = defineCollection({
    type: !!c.file || c.format === 'json' ? 'data' : 'content',
    schema: z.object(s)
  });

});

export const collections = rtn;