<!-- ---
layout: page
title: Comprehensive Project Example
description: a complete showcase of all project features including images, citations, comments, and various layouts
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
giscus_comments: true
# redirect: https://example.com  # Uncomment to redirect this page to an external URL
---

Every project has a beautiful feature showcase page.
This comprehensive example demonstrates all available features for project pages in this Jekyll template.

## Front Matter Options

This project demonstrates all available front matter options:

- **layout**: Always use `page` for project pages
- **title**: Your project title (can be long, supports emoji 🎉)
- **description**: Brief description shown in project cards
- **img**: Background image for the project card (can be empty for projects without images)
- **importance**: Sorting order (1 = highest priority)
- **category**: Organize projects by category (e.g., `work`, `fun`)
- **related_publications**: Set to `true` to show related publications
- **giscus_comments**: Set to `true` to enable comments
- **redirect**: Uncomment and set URL to redirect this page elsewhere

## Image Galleries

### Three-Column Grid Layout

It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width using Bootstrap's grid system.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>

### Single Image Layout

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

## Text and Citations

You can put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

### Custom Width Layout (2/3 + 1/3)

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

## Implementation Details

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).

### Image Classes

To make images responsive, add these classes:
- `img-fluid`: Makes images responsive
- `rounded`: Adds rounded corners
- `z-depth-1`: Adds shadow depth

### Example Code

Here's the code for the custom width layout above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}

### Three-Column Grid Example

{% raw %}

```html
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Your caption text here.
</div>
```

{% endraw %}

## Additional Features

### Background Images

To give your project a background image in the portfolio page, add the `img` tag to the front matter:

```yaml
---
layout: page
title: project
description: a project with a background image
img: /assets/img/12.jpg
---
```

To create a project **without** a background image, simply leave the `img` field empty:

```yaml
img:
```

### Related Publications

When `related_publications: true` is set in the front matter, related academic publications will be displayed automatically based on citation keys used in the content.

### Giscus Comments

Enable discussion on your project page by setting `giscus_comments: true` in the front matter. Make sure Giscus is properly configured in your site settings.

### Redirects

To redirect a project page to an external URL (e.g., a live demo or GitHub repository), add the redirect field:

```yaml
redirect: https://github.com/yourusername/yourproject
```

### Categories

Organize projects by category for better filtering:
- Use `category: work` for professional projects
- Use `category: fun` for personal/hobby projects
- Create custom categories as needed

### Importance Levels

Control the sorting order of projects using the `importance` field:
- `1` = Highest priority (shown first)
- `2`, `3`, `4` = Lower priorities

This comprehensive example showcases all features available in the project template. Use it as a reference when creating your own project pages!
-->
