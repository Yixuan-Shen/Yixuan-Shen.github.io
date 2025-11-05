# 个人信息填充指南

本指南将帮助你将网站模板个性化为你自己的学术主页。

## 1. 基本信息配置 (_config.yml)

### 1.1 个人基本信息
编辑 `_config.yml` 文件中的以下字段：

```yaml
# 第5-8行
title: blank  # 留空则使用完整姓名，或填写自定义网站标题
first_name: 你的名字
middle_name: 中间名  # 如果没有可以删除或留空
last_name: 你的姓氏
```

### 1.2 联系说明
```yaml
# 第9-10行
contact_note: >
  在这里添加一条关于最佳联系方式的说明
```

### 1.3 网站描述
```yaml
# 第11-12行
description: >
  在这里写一段简短的网站描述，会出现在元数据中
```

### 1.4 关键词
```yaml
# 第17行
keywords: 学术网站, 研究, 你的研究领域, 等等
```

### 1.5 语言设置
```yaml
# 第18行
lang: zh  # 如果主要使用中文，改为 zh；英文保持 en
```

### 1.6 网站图标
```yaml
# 第19行
icon: ⚛️  # 可以更换为任何 emoji，或使用图片文件名
```

## 2. 社交媒体配置 (_config.yml)

找到 Google Analytics、Giscus 评论等配置项并填写相应 ID：

```yaml
# 第76行
google_analytics: # 你的 Google Analytics ID (格式: G-XXXXXXXXXX)

# 第104-108行 - Giscus 评论系统
giscus:
  repo: Yixuan-Shen/Yixuan-Shen.github.io
  repo_id: # 访问 https://giscus.app/ 获取
  category: Comments
  category_id: # 访问 https://giscus.app/ 获取
```

## 3. 个人简介页面 (_pages/about.md)

编辑 `_pages/about.md` 文件：

### 3.1 头部信息
```yaml
subtitle: <a href='#'>你的机构</a>. 地址. 联系方式. 座右铭等.

profile:
  align: right
  image: prof_pic.jpg  # 替换为你的照片文件名
  image_circular: false  # true 为圆形头像
  more_info: >
    <p>你的办公室号码</p>
    <p>你的地址</p>
    <p>城市, 省份 邮编</p>
```

### 3.2 正文内容
将第30-34行的示例文字替换为你的个人简介：
- 研究方向
- 教育背景
- 研究兴趣
- 等等

## 4. 简历信息 (_data/cv.yml)

编辑 `_data/cv.yml` 文件，将 Albert Einstein 的示例数据替换为你的信息：

### 4.1 基本信息
```yaml
- title: General Information
  type: map
  contents:
    - name: Full Name
      value: 你的全名
    - name: Date of Birth
      value: 你的生日
    - name: Languages
      value: 中文, 英文
```

### 4.2 教育经历
```yaml
- title: Education
  type: time_table
  contents:
    - title: 博士/硕士/学士
      institution: 学校名称, 城市, 国家
      year: 入学年份 - 毕业年份
      description:
        - 专业方向
        - 导师信息
        - 主要研究内容
```

### 4.3 工作经历
按照类似格式填写你的工作经历。

## 5. JSON 简历 (assets/json/resume.json)

编辑 `assets/json/resume.json` 文件：

### 5.1 基本信息
```json
"basics": {
  "name": "你的姓名",
  "label": "你的职业/身份",
  "image": "",
  "email": "your.email@example.com",
  "phone": "你的电话",
  "url": "https://Yixuan-Shen.github.io/",
  "summary": "一段关于你的简短描述",
  "location": {
    "address": "你的地址",
    "postalCode": "邮编",
    "city": "城市",
    "countryCode": "CN",  # 或其他国家代码
    "region": "省份/地区"
  },
  "profiles": [
    {
      "network": "Twitter/微博/知乎等",
      "username": "你的用户名",
      "url": "你的主页链接"
    }
  ]
}
```

### 5.2 工作经历 (work)
替换为你的实际工作经历。

### 5.3 教育经历 (education)
替换为你的实际教育背景。

### 5.4 技能 (skills)
```json
"skills": [
  {
    "name": "技能类别",
    "level": "熟练程度",
    "icon": "fa-solid fa-hashtag",
    "keywords": ["技能1", "技能2", "技能3"]
  }
]
```

## 6. 仓库展示 (_data/repositories.yml)

文件已更新为你的仓库，可以添加更多你想展示的 GitHub 仓库：

```yaml
github_users:
  - Yixuan-Shen  # 展示这个用户的所有仓库

github_repos:
  - Yixuan-Shen/Yixuan-Shen.github.io  # 展示特定仓库
  - Yixuan-Shen/另一个仓库名
```

## 7. 发布内容

### 7.1 新闻/公告 (_news/)
在 `_news/` 目录下创建 markdown 文件，格式如下：

```markdown
---
layout: post
date: 2024-01-01
inline: true
---

你的新闻内容
```

### 7.2 博客文章 (_posts/)
在 `_posts/` 目录下创建文件，文件名格式：`YYYY-MM-DD-标题.md`

```markdown
---
layout: post
title: 文章标题
date: 2024-01-01
description: 文章描述
tags: 标签1 标签2
categories: 分类
---

文章内容
```

### 7.3 项目展示 (_projects/)
在 `_projects/` 目录下创建项目介绍：

```markdown
---
layout: page
title: 项目名称
description: 项目简短描述
img: assets/img/项目图片.jpg
importance: 1  # 数字越小越靠前
category: work  # 或 fun
---

项目详细介绍
```

### 7.4 出版物 (_bibliography/papers.bib)
编辑 `_bibliography/papers.bib` 文件，添加你的论文：

```bibtex
@article{你的论文标识,
  title={论文标题},
  author={作者列表},
  journal={期刊名称},
  year={年份},
  publisher={出版商},
  selected={true}  # 如果是精选论文
}
```

## 8. 图片和资源

### 8.1 个人照片
将你的照片放在 `assets/img/` 目录下，命名为 `prof_pic.jpg`（或在 `about.md` 中指定的名称）。

### 8.2 项目图片
项目相关图片也放在 `assets/img/` 目录下。

## 9. 社交链接配置

编辑 `_config.yml` 底部（未在前面展示的部分）或 `_data/` 目录中的社交媒体链接文件，添加你的：
- GitHub
- Twitter/X
- LinkedIn
- Google Scholar
- ResearchGate
- ORCID
- 等等

## 10. 测试网站

在本地测试网站：

```bash
bundle exec jekyll serve
```

然后在浏览器中访问 `http://localhost:4000`

## 11. 提交更改

确认所有更改后：

```bash
git add .
git commit -m "Personalize website with my information"
git push
```

## 注意事项

1. **隐私保护**：不要在公开网站上发布敏感的个人信息（如完整地址、电话号码等）
2. **图片大小**：优化图片大小以提高网站加载速度
3. **定期更新**：保持简历、论文列表等信息的更新
4. **备份**：定期备份你的网站内容

## 需要帮助？

- 查看 [al-folio 官方文档](https://github.com/alshedivat/al-folio)
- 阅读 `CUSTOMIZE.md` 了解更多自定义选项
- 查看 `FAQ.md` 获取常见问题解答
