---
layout: default
title: 📔 Blog
style: blog-index
---

## Posts

<table class="post-list">
  <thead>
    <tr>
      <th>Title</th>
      <th>Updated</th>
      <th>Tags</th>
    </tr>
  </thead>
  <tbody>
    {%- for post in site.posts -%}
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

## Tag Cloud
{% for tag in site.tags %}
  [{{ tag[0] }}](tags/{{ tag[0] }}){:style="font-size: {{ tag[1] | size | times: 4 | plus: 10 }}px"}
{%- endfor -%}

<br/>

[Click here for RSS feed](/feed.xml)
{:class="center"}
