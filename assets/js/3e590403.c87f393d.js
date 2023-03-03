"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[9430],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?i.createElement(k,r(r({ref:t},s),{},{components:n})):i.createElement(k,r({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={title:"6. Configure Policies",description:"Turbonomic Policies",sidebar_position:6},r=void 0,p={unversionedId:"turbonomic/policy/index",id:"turbonomic/policy/index",title:"6. Configure Policies",description:"Turbonomic Policies",source:"@site/labs/turbonomic/6-policy/index.mdx",sourceDirName:"turbonomic/6-policy",slug:"/turbonomic/policy/",permalink:"/waiops-tech-jam/labs/turbonomic/policy/",draft:!1,editUrl:"https://github.com/IBM/waiops-tech-jam/tree/main/labs/turbonomic/6-policy/index.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"6. Configure Policies",description:"Turbonomic Policies",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"5. Kubernetes Data Target",permalink:"/waiops-tech-jam/labs/turbonomic/kubeturbo/"},next:{title:"7. Taking Actions",permalink:"/waiops-tech-jam/labs/turbonomic/taking-actions/"}},l={},c=[{value:"6.1: Introduction",id:"61-introduction",level:2},{value:"6.2: Create Groups",id:"62-create-groups",level:2},{value:"6.3: Setup a Policy",id:"63-setup-a-policy",level:2},{value:"6.4: Editing a Policy",id:"64-editing-a-policy",level:2},{value:"6.5: Deleting a Policy",id:"65-deleting-a-policy",level:2},{value:"6.6: Summary",id:"66-summary",level:2}],s={toc:c};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"61-introduction"},"6.1: Introduction"),(0,a.kt)("p",null,"Turbonomic defines a set of default policies for each entity type which are used\nto analyze data and make action recommendations."),(0,a.kt)("p",null,"Users can define their own policies for each entity in the supply chain based on\nbusiness requirements."),(0,a.kt)("p",null,"Policies define business rules to control how Turbonomic"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"analyzes resource allocation."),(0,a.kt)("li",{parentName:"ul"},"displays resource status"),(0,a.kt)("li",{parentName:"ul"},"recommends or executes actions.")),(0,a.kt)("p",null,"In this lab, you will configure an SLO policy for the Robot Shop application to\nunderstand how Turbonomic ARM uses target data already configured to make action\nrecommendations that will assure application performance."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"62-create-groups"},"6.2: Create Groups"),(0,a.kt)("p",null,"In Turbonomic ARM, groups:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"are a collection of like entities."),(0,a.kt)("li",{parentName:"ul"},"can be used any place where you can scope."),(0,a.kt)("li",{parentName:"ul"},"are automatically created in some cases.")),(0,a.kt)("p",null,"Now we first need to create the group containing the Robot Shop business\napplication."),(0,a.kt)("p",null,"In the Turbonomic ARM user interface:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings -> Groups"),":"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(81108).Z,width:"1532",height:"817"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"NEW GROUP"),":"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(86465).Z,width:"1176",height:"586"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Container Spec"),":"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(8865).Z,width:"1297",height:"631"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter the group name as ",(0,a.kt)("inlineCode",{parentName:"p"},"Robot Shop Group")," and select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dynamic")," type:"),(0,a.kt)("admonition",{parentName:"li",title:"Static vs Dynamic",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"use Dynamic groups if there is criteria which can define your group."),(0,a.kt)("li",{parentName:"ul"},"use Static groups when:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"You do not expect membership to ever change."),(0,a.kt)("li",{parentName:"ul"},"There is no criteria that can be used to define the group."))))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(62921).Z,width:"1322",height:"630"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD FILTER")," and select ",(0,a.kt)("inlineCode",{parentName:"p"},"Namespace"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select filter ",(0,a.kt)("inlineCode",{parentName:"p"},"Equals")," and enter the regular expression ",(0,a.kt)("inlineCode",{parentName:"p"},"robot-shop"),", then\nclick the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apply")," button:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(36513).Z,width:"1316",height:"622"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"SAVE GROUP")," button:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(25572).Z,width:"1317",height:"632"})),(0,a.kt)("p",{parentName:"li"},"You should now see the ",(0,a.kt)("inlineCode",{parentName:"p"},"Robot Shop Group")," newly created."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(76254).Z,width:"1325",height:"627"})))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"63-setup-a-policy"},"6.3: Setup a Policy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the Turbonomic ARM homepage and click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings"),":"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(16235).Z,width:"1257",height:"668"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then choose ",(0,a.kt)("inlineCode",{parentName:"p"},"Policies"),":"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(14141).Z,width:"1261",height:"663"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then click on ",(0,a.kt)("inlineCode",{parentName:"p"},"NEW AUTOMATION POLICY"),":"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(62981).Z,width:"1328",height:"647"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("inlineCode",{parentName:"p"},"Container Spec")," as the policy type for the Robot Shop application:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(56201).Z,width:"1335",height:"630"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fill in the name as ",(0,a.kt)("inlineCode",{parentName:"p"},"Robot Shop Container Spec Policy")," and click on\n",(0,a.kt)("inlineCode",{parentName:"p"},"ADD CONTAINER SPEC GROUPS"),":"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(80488).Z,width:"1306",height:"613"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Robot Shop Group")," checkbox and click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," button."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(54429).Z,width:"1352",height:"652"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Expand the ",(0,a.kt)("inlineCode",{parentName:"p"},"SCALING CONSTRAINTS")," section:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(22822).Z,width:"1348",height:"633"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure the scaling constraints as in the image below:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(82098).Z,width:"1342",height:"637"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then click the ",(0,a.kt)("inlineCode",{parentName:"p"},"SAVE AND APPLY")," button. With the policy configured,\nTurbonomic will analyze performance data over time and then provide placement\nand resource sizing recommendations.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The scoped policy you have created can be found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Automation Policies"),"\ncategory:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(46995).Z,width:"1227",height:"597"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Imported Placement Policies")," category is specifically for imported\non-prem policies:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(64049).Z,width:"1363",height:"722"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Defaults")," category represents the policies that govern entire entity\ntypes."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(7786).Z,width:"1363",height:"722"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now go back to the Turbonomic dashboard. ",(0,a.kt)("strong",{parentName:"p"},"Wait for a few minutes")," and you\nwill notice there is ",(0,a.kt)("inlineCode",{parentName:"p"},"ACTIONS")," now on the Robot Shop application:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(47003).Z,width:"1311",height:"623"})))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"64-editing-a-policy"},"6.4: Editing a Policy"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This is for information only, there is no need to actually edit any policy for\nthese labs.")),(0,a.kt)("p",null,"To edit a policy, click on the policy:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8155).Z,width:"1367",height:"725"})),(0,a.kt)("p",null,"Make your changes and save."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"65-deleting-a-policy"},"6.5: Deleting a Policy"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Important:")," This is for information only, do not delete any policy for\nthese labs.")),(0,a.kt)("ol",{start:18},(0,a.kt)("li",{parentName:"ol"},"To delete a policy:")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(22281).Z,width:"1367",height:"723"})," ",(0,a.kt)("img",{src:n(3625).Z,width:"1363",height:"727"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"66-summary"},"6.6: Summary"),(0,a.kt)("p",null,"In this section, you have learned how to create a scoped policy for a container\nspec, in this case to govern an application container spec."),(0,a.kt)("p",null,"Next, we will look at how to take actions to assure application performance."),(0,a.kt)("hr",null))}m.isMDXComponent=!0},81108:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/groups-1-fd7e391f5bebe48f04bb1ce4d542597e.png"},86465:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/groups-2-2bc6572cc3985e66ce44bcfd75c4c411.png"},8865:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/groups-3-9d05b160c9b725c2f92b374a371cf0de.png"},62921:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/groups-4-227567fd7e93c7f4b550f02a68a3a1d8.png"},36513:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/groups-5-89d35bc35895a0a46a4aca01d8f61b14.png"},25572:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/groups-6-2b5f008e1824c6e8b96c7a2666a7c664.png"},76254:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/groups-7-dc0507e30739417175520bd6ab6e6e39.png"},62981:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/policy-1-3a5803889c88d7c8aa2e4f116f171bae.png"},56201:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/policy-2-5e5aa429dd74c5c0efc689740a1beaf9.png"},80488:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/policy-3-22041915c478c63408a7f01cc8c375d1.png"},54429:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/policy-4-f78897f696440c9e95265634d5fb9fb0.png"},22822:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/policy-5-95bf343420af04125a5909c4823fe9d4.png"},82098:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/policy-6-12a4fecd5134c0b1a9ba24f9843f59ba.png"},46995:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/policy-7-304c74dbcdce73bac55e6d36fee2efc4.png"},47003:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/policy-8-83da926ad2af3b0036edb474db844ab2.png"},7786:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/turbo-defaults-policy-fe16b4bb4a5187ed24ab1e2f1bccc625.jpg"},22281:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/turbo-delete-policy-1-b07c51b717c1abe6b27d2333b7bf34d1.jpg"},3625:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/turbo-delete-policy-2-627784fcbf1d9ac2d4de13e31dd5b3b3.jpg"},8155:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/turbo-edit-policy-e8df132e4b4e6a827bb2b888178d9de0.jpg"},64049:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/turbo-imported-placement-policies-6126cb3c3abf6264e27c33c72cc133f0.jpg"},14141:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/turboPolicies-32ea2f50c88701711ac101157528b261.png"},16235:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/turboSettings-3f19e1cd287be30bb837dfb203198870.png"}}]);