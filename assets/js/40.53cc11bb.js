(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{458:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"sql语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql语句"}},[s._v("#")]),s._v(" SQL语句")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 查询数据库 ‘mammothcode’ 所有表注释 */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" TABLE_NAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("TABLE_COMMENT "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" information_schema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" table_schema"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mammothcode'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 查询数据库 ‘mammothcode’ 下表 ‘t_adminuser’ 所有字段注释 */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" COLUMN_NAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("column_comment "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" INFORMATION_SCHEMA"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Columns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" table_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t_adminuser'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" table_schema"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mammothcode'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* 一次性查询数据库 "mammothcode" 下表注释以及对应表字段注释*/')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TABLE_NAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TABLE_COMMENT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("COLUMN_NAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("COLUMN_TYPE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("COLUMN_COMMENT "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" information_schema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLES")]),s._v(" t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("INFORMATION_SCHEMA"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Columns")]),s._v(" c "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TABLE_NAME"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TABLE_NAME "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("TABLE_SCHEMA"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mammothcode'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);