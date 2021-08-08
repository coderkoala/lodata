(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{432:function(e,t,s){"use strict";s.r(t);var a=s(19),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"asynchronous-requests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#asynchronous-requests"}},[e._v("#")]),e._v(" Asynchronous requests")]),e._v(" "),s("p",[e._v("The OData specification defines "),s("a",{attrs:{href:"https://docs.oasis-open.org/odata/odata/v4.01/os/part1-protocol/odata-v4.01-os-part1-protocol.html#_Toc31359016",target:"_blank",rel:"noopener noreferrer"}},[e._v("asynchronous requests"),s("OutboundLink")],1),e._v("\nwhere the client indicates that it prefers the server to respond asynchronously via the "),s("code",[e._v("respond-async")]),e._v(" Prefer header. This is helpful\nfor long-running "),s("a",{attrs:{href:"#operations"}},[e._v("operations")]),e._v(".")]),e._v(" "),s("p",[e._v("Lodata handles this by generating a Laravel "),s("a",{attrs:{href:"https://laravel.com/docs/8.x/queues#creating-jobs",target:"_blank",rel:"noopener noreferrer"}},[e._v("job"),s("OutboundLink")],1),e._v(" which is then processed by\nLaravel in the same way it handles any other queued job. For this to work your Laravel installation must have a working job queue.")]),e._v(" "),s("p",[e._v("When the client sends a request in this way, the server dispatches the job and returns to the client a monitoring URL. The client\ncan use this URL to retrieve the job output, or its status if not completed or failed. The client can also provide a callback URL\nto be notified when the job is complete.")]),e._v(" "),s("p",[e._v("The job runner will execute the OData request in the normal way, but will write the output to a Laravel "),s("a",{attrs:{href:"https://laravel.com/docs/8.x/filesystem#obtaining-disk-instances",target:"_blank",rel:"noopener noreferrer"}},[e._v("disk"),s("OutboundLink")],1),e._v("\nfor it to be picked up later. The name of this disk is set in the "),s("code",[e._v("disk")]),e._v(" option in "),s("code",[e._v("config/lodata.php")]),e._v(". In a multi-server environment\nthis should be some type of shared storage such as NFS or AWS S3. The storage does not need to be client-facing, when the job output\nis retrieved it is streamed to the client by the Laravel application.")]),e._v(" "),s("h2",{attrs:{id:"sending-a-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sending-a-request"}},[e._v("#")]),e._v(" Sending a request")]),e._v(" "),s("p",[e._v("When dispatching a request with "),s("code",[e._v("Prefer: respond-async")]),e._v(", Lodata will return a "),s("code",[e._v("202 Accepted")]),e._v(" header, and a "),s("code",[e._v("Location")]),e._v("\nheader with a URL that can be used to monitor the progress of the request and retrieve the result.")]),e._v(" "),s("code-group",[s("code-block",{attrs:{title:"Request"}},[s("div",{staticClass:"language-uri line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-uri"}},[s("code",[s("span",{pre:!0,attrs:{class:"token path"}},[e._v("GET")]),e._v(" http://localhost:8000/odata/People\n"),s("span",{pre:!0,attrs:{class:"token scheme"}},[e._v("Prefer"),s("span",{pre:!0,attrs:{class:"token scheme-delimiter"}},[e._v(":")])]),e._v(" respond-async\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])])]),e._v(" "),s("code-block",{attrs:{title:"Response"}},[s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("HTTP/1.1 202 Accepted\nlocation: http://localhost:8000/odata/_lodata/monitor/b6534e03-564b-4a74-abe6-a912483688e6\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"accepted"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Accepted"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"target"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"details"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"innererror"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])])])],1),e._v(" "),s("h2",{attrs:{id:"monitoring-the-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-the-request"}},[e._v("#")]),e._v(" Monitoring the request")]),e._v(" "),s("p",[e._v("The request can be monitored on the returned URL. If the job is not started or in progress the monitoring URL\nwill return "),s("code",[e._v("202 Accepted")]),e._v(". If it is complete then it will return the result. The HTTP response code of the monitoring\nURL will be "),s("code",[e._v("200 OK")]),e._v(", to check the HTTP response code of the request itself check the "),s("code",[e._v("asyncresult")]),e._v(" response header.")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("The result of the request can only be retrieved once. After it is retrieved further requests to the monitoring URL\nwill return "),s("code",[e._v("404 Not Found")]),e._v(".")])]),e._v(" "),s("code-group",[s("code-block",{attrs:{title:"Request"}},[s("div",{staticClass:"language-uri line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-uri"}},[s("code",[s("span",{pre:!0,attrs:{class:"token path"}},[e._v("GET")]),e._v(" http://localhost:8000/odata/_lodata/monitor/b6534e03-564b-4a74-abe6-a912483688e6\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])]),e._v(" "),s("code-block",{attrs:{title:"Response"}},[s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("HTTP/1.1 200 OK\nodata-version: 4.01\nasyncresult: 200\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"@context"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://127.0.0.1:8000/odata/$metadata#People"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"michael-caine"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Michael Caine"')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"bob-hoskins"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Bob Hoskins"')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])])])],1),e._v(" "),s("h2",{attrs:{id:"cancelling-the-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cancelling-the-request"}},[e._v("#")]),e._v(" Cancelling the request")]),e._v(" "),s("p",[e._v("If the request is pending then it can be cancelled by sending a DELETE request to the monitoring URL:")]),e._v(" "),s("code-group",[s("code-block",{attrs:{title:"Request"}},[s("div",{staticClass:"language-uri line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-uri"}},[s("code",[s("span",{pre:!0,attrs:{class:"token path"}},[e._v("DELETE")]),e._v(" http://localhost:8000/odata/_lodata/monitor/b6534e03-564b-4a74-abe6-a912483688e6\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])]),e._v(" "),s("code-block",{attrs:{title:"Response"}},[s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("HTTP/1.1 200 OK\nodata-version: 4.01\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])])])],1),e._v(" "),s("h2",{attrs:{id:"using-a-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-a-callback"}},[e._v("#")]),e._v(" Using a callback")]),e._v(" "),s("p",[e._v("The client can be notified when the request is complete by providing a callback URL. When the request is complete\nthe service will make a GET request to the provided callback. No payload or query parameters are added, the client\nmust provide a callback URL that contains any tracking information needed to match the original request.")]),e._v(" "),s("div",{staticClass:"language-uri line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-uri"}},[s("code",[s("span",{pre:!0,attrs:{class:"token path"}},[e._v("GET")]),e._v(" http://localhost:8000/odata/People\n"),s("span",{pre:!0,attrs:{class:"token scheme"}},[e._v("Prefer"),s("span",{pre:!0,attrs:{class:"token scheme-delimiter"}},[e._v(":")])]),e._v(" respond-async,callback;url=https://client.example.com/callback\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);