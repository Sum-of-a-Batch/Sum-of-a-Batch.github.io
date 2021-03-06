---
layout: default
title: 📔 Blog
style: blog-index
---


### Posts

{% assign sorted_posts = site.posts | sort: "date" %}

<table class="post-list">
  <thead>
    <tr>
      <th>Title</th>
      <th>Updated</th>
      <th>Tags</th>
    </tr>
  </thead>
  <tbody>
    {%- for post in sorted_posts reversed -%}
    <tr>
      <td>
        <a href="{{ post.url }}">{{ post.title }}</a>
      </td>
      <td>{{ post.date | date: site.date_format }}</td>
      <td class="tag-column">
        {% for tag in post.tags %}
          <a href="/blog/tags/{{ tag }}">{{ tag }}</a>
        {% endfor %}
      </td>
    </tr>
    {%- endfor -%}
  </tbody>
</table>

<br/>

### Tag Cloud
{% assign sorted_tags = site.tags | sort %}
<div class="tag-cloud-marker"></div>
{%- for tag in sorted_tags -%}
  {%- assign size = tag[1] | size | plus: 2 | times: 5 -%}
  [{{ tag[0] }}](tags/{{ tag[0] }}){:style="font-size: {{ size }}px"}
{% endfor %}

[Click here for RSS feed](/feed.xml)
{:class="center"}
