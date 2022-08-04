'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "176455be3132c08410ca7800a61950fb",
".git/config": "8cf87c27e717f8ed96ad8140a045b925",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ef801e236c392c106e720209d0fb7c27",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3ef9588fdcd153bc4024e10b504a3125",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8044aa32700b6696eb480aa2203328a2",
".git/logs/refs/heads/main": "0298c1ff6fdf08beb0910dd4ea14fd51",
".git/logs/refs/remotes/origin/main": "3992389b2b8781640e24b724a0ad32f5",
".git/objects/00/65443f91f5f1ebfe5fac283ee5c6ab95b032a1": "e6e93b736f3ea19e80817691a1d7dd6f",
".git/objects/01/7cc0cf59f6da5c410eb390fbd86f2499e9e525": "740b931bd6d3d3a456f1e439419d5a38",
".git/objects/02/384cc4dceee9b036d8eea02348fa26711ac294": "2c96cd75506da0fc1e16c812ac9c0c28",
".git/objects/03/d49b940b8c0dc945639fdbf5e8ce8c2f659414": "a020c3520dea94bb4e5e305f89292917",
".git/objects/08/30ebaef4fb743d85726ce2c82264c3b347aa3e": "761ecc5b99fbb593207b8fa0b0cf0637",
".git/objects/08/738f32d981b407a47d4f540aff69efc699f3df": "de00c4f34a21840e1ea61d23b8b8e9f0",
".git/objects/0b/362683708899887c6f00551817e0e69de3b382": "d6ece435d8b50c10f2c85957003b73e5",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/2e2b81529bbc4b37ed404cec5d516b5fe22d38": "74501cdad324a6ef2cb3a6fa083cd3e1",
".git/objects/11/d0e5dfd066ac3044668ee15f512a6e5c585304": "1860e53f598c5cf7a68a47d53d8973bf",
".git/objects/13/1bd9c9c70a660e8a69c0034dd018ff71ddb0c6": "d93fb5fe90f9ebcdc5bb13318c8ecc9d",
".git/objects/13/bcf14c991220f822b219fb093e461980c8fb15": "53de0401ea8878c26f6db3988768bfd1",
".git/objects/17/29089c4137e0924725a904755905623c48ea83": "b5b8019c28b603064a37d24ea6406bc5",
".git/objects/17/6267c2fc0ce32278f453ed71d62824486abb71": "5c6d3df564d1b5f4ec3749c4204db144",
".git/objects/1c/83eabb82ceb536c215927a5e800315cdd9d3d7": "e5858321f8b0184adb5adb98a611ae97",
".git/objects/1e/1a31bca96b714c6c2705c9d9399fafd7806f77": "27d75bc7f7a3956b1bff304a91fb535d",
".git/objects/1f/a054a80f7d5636106b76e76b501dc7400e6197": "965d2cf10aefff791bb231d451e7b6e7",
".git/objects/20/8d6faa037dfbc626be88e0ca631ec36890adc3": "03ee2faf0aa3de36aff0c4a76c93fec3",
".git/objects/21/97006e0bbb0a83325d922e543be2b09c50cf04": "14210318712162eba0aa50199b224d6d",
".git/objects/21/e77b7ae2c81bba34dea7ba6aa89d0759e826ed": "75103caef507aeeb8d636d007357db38",
".git/objects/24/188ae2c1eedb403be98158d77e738eac4c877e": "c27f2f029384f5a263841c32bcdbfe9b",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/e4ffe229341e974d4e61afa7698ea41327beee": "9f9d6d80ac3e294e80c26df8775b1615",
".git/objects/25/eefd316aa63afe8fc4b6efe59eae2101c0bbb0": "d2d6b88577280a0581ea7273ef43eb32",
".git/objects/26/f7f464c5a63f5d1c7458195bc8c158653d7506": "fbcace57b867fa48109ca471c0ed0bdf",
".git/objects/27/e562af1909f3d3f20194d3d304feeda99c79df": "f80b80b9316ea58c00ffe2265e01d45b",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/cf3bcedeacc109bc4abaa16c401a37dad36ed4": "aafe168b139a70d3aabd7a037c7973c0",
".git/objects/32/378f218d45494e0eefc7dcc47c9f5d4e48d465": "5811ab8b422bb58c5fe5af7138b7ef69",
".git/objects/32/f48ea309b9d2cd9df556269da43739bde1fae4": "26e5fb1c321b224e708b7cd0a26e039c",
".git/objects/33/04b809aea01f0ef4d0960b09887f4aa9ef5e59": "0c32c3bc11fa93e34d984430b3818939",
".git/objects/33/5d8ccba0799e11ead5de6a0459f2c52b6a6a97": "a52dcf8e136d3c14feacf21870cabcee",
".git/objects/33/e9f3aa50dbf54bb31da502a90d7d42407052da": "32b4aea947b95436dfedd4b73afcc668",
".git/objects/35/07f89af6f57e3a41702aa9b75240e50a8143c0": "900d73d02a1b94817511d6fb9c650693",
".git/objects/35/b861cf27388775833dc78fea9c02bfa9d5f1f4": "831a2fc19cb2feca98dfe08dda31743e",
".git/objects/37/99141195e25e2d174173114695148020f84379": "7ba90593d8af101f8601172fcb08ffbf",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/2546a60256ffef9735102bf053c987874897d9": "2ca26f9474de903a667aa3ec4ca46bab",
".git/objects/3c/c90ad6a6e118306edcfc7ef6ae8d2cb9247b1d": "99741e59598eb040b37bac7c525baab0",
".git/objects/3e/8e384b4e6befa24fcf02f943646afdfbf0179c": "337f8b86d898e291f18519245b53d778",
".git/objects/3e/b0117561814a64fb376601027c94927044c591": "71baa7d418b00f7da432a2951112f0a3",
".git/objects/40/6e67aaee56e515b9fc523e026abf1e6d2f16f1": "99a4eb3a0e63474caadefc26a99e671a",
".git/objects/40/c9e18ade96352187ce318d666f83251674e050": "a8f84651d0247cec3d3102dff8a5fb6c",
".git/objects/41/5011f8f2814d645c97a84bd50973f0d027acd1": "245e76d33f6c69e2d565c7315cfc7bcc",
".git/objects/43/2e5ac36326e7953367a7ea36eb8eedd7f8b2af": "821d7667d63b865db85ccaf7c21cba98",
".git/objects/43/4e1843bc51be7ed1b07bcf2d99b348baedfa99": "afb4fcd55072de8890c3938eadbdb549",
".git/objects/45/4eda5be4f17dd954160b841b59ea55b2e288ab": "4858c726c149838c18ac76b22d57618e",
".git/objects/46/f09c9d906fbb203ee348e55c294247b6554b81": "27b8b851dea00edc62122c5f06545f08",
".git/objects/47/9ddcde3b51bcd5b6eec93a08a1431aeaab5260": "605b60f63c99ec123cb167ab2f41144a",
".git/objects/49/1999b7a50612b599f4f5a63f6aba91febb0037": "a6302cd1058b1c74a12733a510a889c2",
".git/objects/4a/eb8384b951576b4b2178d908210372f4c19639": "a63fa2a5549e78c09ed0342ef0fb8538",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/06c6356e4ba7a5caddc0b4cb047cc6ca4ceebd": "c33eb8214c247a639edb59fe02c49924",
".git/objects/4e/81885239722414fe493b5490fea7c2e1f8df76": "af7bbecaaac1520cb215cc2a41f4ce01",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/ec66e2479a0b0365e24ec211071217f4d1c90c": "02d1f417e84284862ec22c9661fcf6cc",
".git/objects/50/0eb2bbf7e8d035f38ce56286597c9fb73af15d": "0fa6db239fa807a383d9866eab809932",
".git/objects/53/bdbbd56ea6bb2525119283ec6ba72932ac4cfe": "d760919786039ad91eed295f26b7fe02",
".git/objects/56/551799fb0b5da1e3651dbd5ed67fe762a6b6b4": "4b4a9df8fa54786beacc5a28ac1deff6",
".git/objects/56/79b35c8528dc5ee8d83e9ed32133043bda24b5": "b9ebf521aebbfd3eade749e173a101d6",
".git/objects/58/27e02d6060cbe01fbc41dcb5ba55061e6b23fb": "fc8b63ba2b4b4330f9afe8f2d8c632b8",
".git/objects/58/acf1d1d200174606165722ca3a8a08ff25effd": "1e55f0916cdcf564ea98b9aad0785753",
".git/objects/58/c1949cad8f5c510ca40c931327df1d210b5cb5": "6d023c68b1d69cb967cae115c0d6b5b3",
".git/objects/59/5cabc2d3da972527ac772c0c7ea8c08088b067": "1b2c65f0daea273f8bc809a917109f6b",
".git/objects/5d/9b1e4561278076209a96b684c164a9ddfbc1f9": "5b87dfc0509b8d364f5d67d03053b0df",
".git/objects/5e/2ea411e3371b38fc05168c6436415e371f2317": "6e94d4e5bcef31b701734b609e06d1ed",
".git/objects/67/dcfecde1a5fbfc78d4e5fc1f174c8a97e72e20": "63110439d6d276d58997bee31036328b",
".git/objects/68/cb34f24db1017669c2decbc9e72c9454971c45": "a2f8d703f5cd0d038aa44987d57fb549",
".git/objects/6a/4340de3bd009f04c3a274ad4295359b0b53fb0": "340f6ea15380b66e03dc4117b90b1b61",
".git/objects/6d/8bc9b5a9d51c45177b24db99cd6a254bc4eedb": "cdb7c4f1a06aca0ccffef7676a6c47ec",
".git/objects/6f/25481336980f9c66c12147ca552effc7382899": "c529195dc363f39ec07a9947eafa63c4",
".git/objects/6f/6b8b5d1d311c196fa3070c1283c7296140774b": "ede5af0077e56009eb1043bd1cf57016",
".git/objects/71/76685cf0b5464445e1dfa5b8f7e6c41ece7610": "acc2f0b7b1e0e70d5aae3c5ebdcb4328",
".git/objects/71/fc408968bd45c6ba48f0470e94739c50ad5af5": "ca596652c2a9cf270fe20fa22b4fff56",
".git/objects/73/3bb541a4e771706c5d4c68a64ec1ac40d8f036": "a03030b3858ab7ed04133b72157eee1c",
".git/objects/74/1a12904e2853d67d3a259e5fd621b0c117e58f": "56f98de2283ec1a74d476998a7955518",
".git/objects/76/46fa2f4482bf43f4e526639e427312a2dcb0b4": "a4ab7d79380d4300fb7d2d3c551b316b",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/7a/c2a0e320f30c7ae3660078f3535f8b273114da": "a32b7d660f476679a506cb18e9d6d42a",
".git/objects/7e/4b28c0b9555e918f7ec2aac0e0f767bae8e405": "83ba26f9496416afb26e93a71ee100e0",
".git/objects/7f/b3576db8fe1d75f565f606add322a8d808de1e": "eb36e7f9f33ce58888ab12e7920108e9",
".git/objects/80/98bf1114319ed81edd0c399e4929bf7297a1ea": "bf934a083d4f6bc717d7f2a232e51d9b",
".git/objects/81/58d77b20b1b0c6fa01d91313dfd7269cb1da1f": "0e0790af93093c9ca4293122c4b22d5c",
".git/objects/82/5d6ffa2358b6c9d7d202d54a353486268663f1": "d513f0f53f886646522f03929f8fb62a",
".git/objects/82/aa0f4e3118f3f70c0c0257b3971f9fe7a9b71d": "e4a43bde99cb4037772009c8fe6f0021",
".git/objects/83/276a5d67e71028bc50000abb70945a17959d26": "d187f51a81fcf833a548dd083beb880d",
".git/objects/83/b4a9f51943253202629db4e76675944a263c14": "3cc18ab14818bbd0018fc869a5673215",
".git/objects/84/6de7eef655e156cc855d44f044eb2689082c18": "edb4f3095df7a214f3a9ce45d12bca5b",
".git/objects/85/d3748d7f0ae01c6ecd4d75adef541bbc7cfd93": "6519f466b6a3f45896b0d793eded0969",
".git/objects/85/e525fff710894c22adb34ecabfd3b07e42570b": "7eb49e963e7aed91fdd12ecde70cdeca",
".git/objects/86/97259fcc752dbf5f2418cee1f1b67546b4063e": "7cf6b5c7ff573c4e3ca2ea24e366e482",
".git/objects/87/45650f1a3a64e36fd78057bfc81e7419a2d2f5": "630c116fe836628aeb53a6bbd760e894",
".git/objects/87/7df331ff92601c05bd910e3737652e45b8bdb8": "2bdcdea9fcf4be0d533d029e971e51bb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e0848b3a07765a56a1d7702bd2c046306eb8f8": "2171f7f8b914068d71d5d9682ac98377",
".git/objects/8b/c4ee636ce2b0da1fa89c51d9f24f3a83785bc0": "8d423f1cb5a7707ec87e0caaa3d53632",
".git/objects/8c/7e25a2a645cfbe55798a8b5f5c84c7276a9680": "41059802144f948675f717eeda413ab9",
".git/objects/8c/e9de5480caadd0ca3a72e5fe7c07bc59f2d4b3": "61c5be0f58be9f742515104bf5e3241f",
".git/objects/8e/894a4d18244773b390492da52abab783445e6d": "d2e1fbf3c783e916798b454c82601485",
".git/objects/90/cc3c6ec717b4636cea29f8697b5c32f739bece": "9caf6030feb3e388e64607adfaf453fe",
".git/objects/91/c316db9ac76712bec2a9265d26a44b376761ac": "755289af0801210157f32dfc18f3be3a",
".git/objects/92/00ddbf010d5825ccaf097ebd60938715637729": "c27f268b97dbfd34d6aac92fbafe4046",
".git/objects/92/410deb845a0770460858634094a5fb4a454820": "040796fad49af823e8bebbaa26967815",
".git/objects/93/905cb0ce19f3842b9db6a3c5db86d898d43d6c": "d9bbc24977a533dcdb3d3acf92fa7ae9",
".git/objects/93/961089a2c955f4e1334c80dfd81c5fe71f9039": "00141e64c055dc22a63879475c099419",
".git/objects/94/53bc7fc6e7b33aaeb83b3f397d06dfa1c5db56": "bfb16a40372f11cb5698cfe6a0ac56fb",
".git/objects/94/cfc80f3c89104a124e7433564884b240a346e2": "b52ee6eb7d87f185e17bfbb62c07be17",
".git/objects/95/cc312e1089f652ecd9902d469dd0ae8270292e": "9b8f05c37ed199935f26819565d2d062",
".git/objects/97/0f6dd78c72a50ee94c7f0dac54cae3320bcfc5": "e8a317acfef568a18538ce6578fc3019",
".git/objects/9b/596cd8a267dbf2d1f9a27011ac18c345505112": "b6383c9cec518f6baa48cb64de835ca8",
".git/objects/9b/d1b4e2c874d83de7bdfb5d81c5d971a0107380": "eaa542e1acb0502c31ce4bb4fb332507",
".git/objects/9c/5f595b278d87dc1ff28323f636bb8b08d0922e": "be3b1eb293929730c840e6179006b7ed",
".git/objects/9c/f93ffff1a3dd214dbc3bd4d22042ae83821092": "3c265a9506f24ec935475ff539fd4573",
".git/objects/9d/243f417e17e869420259823229c7d95e60ca8b": "f9e2ae71699ffe46d804093e05fb0420",
".git/objects/9d/ff27689d519c2893be605aa8e3a9edd87525ff": "f1bdc5098ddb8bdc78452ed0eddb2811",
".git/objects/a5/beeac4a11e781c7dc01d94d9a899d4ea73153f": "2a0b6e5a96ca2a0d7bcc0445b1dd4bae",
".git/objects/a6/76dcf644046ba6ede158d048c949bbd386dc6d": "56463e50ceccf2169e95e12874c7b088",
".git/objects/a7/f2d58cdb3f701da53fa62d5522693815111f40": "5d05edcd9d664cf033b5bce04c9482be",
".git/objects/a9/e8f7cd326e9807b34926ffd6ab462b34f3f666": "511a3d99c8b2b882fb6d217887497a85",
".git/objects/aa/93257944391ad82bdfaa0d974c667fe5f23794": "784dd35a19adbd73a63389afa30faa25",
".git/objects/ac/0dd08c82861bad386bc5acaee7fb9605428cc3": "14fedbb1c9327b7519a59e013822b47f",
".git/objects/ad/d392f4e579049df3d03b8e32a523590a777ddc": "a7e95053e7470210e2c04f7fd29eedca",
".git/objects/b0/2c47c8a6925be260321e9944fe2bd1baaa8165": "5d41b158d3b10212f9410aa36360672a",
".git/objects/b0/a2ac20c0b07b471f740170ae23dbf017e05d50": "bfedce9066334812831728e9dabb66fd",
".git/objects/b1/30ece27ee46033a403b4aa9faa984c99e80887": "885026f4deee0bd45f6e54c673e5f2fa",
".git/objects/b2/9eb87b51f8c21ea95a97d051f9aca1aede2c5e": "f354b2a5a3d48bf9180a0a97c3eeeccb",
".git/objects/b2/b2bc7446b1ac0cabedafeed3861cc028e373d3": "a99e0d54101fdb7c40219d7e3752cd3b",
".git/objects/b3/2c6f92cba562e95aff7b9e11de389f8acb06b2": "b68046010b391eded3cd75eaf1b13b2b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e55e9472e6507067057c78534649e256fe2bd1": "3bf2be48a1163f03408cfc0b4f88c4d6",
".git/objects/b8/295e0f8d1ba8c2fa6c37d26980c645058589ad": "3d67726e5624ac05e2c6e4804d250b9a",
".git/objects/b8/7e955857b33fc54c06e4b7739e23be5ace82f4": "77d497e307555a605c0fac816903b86e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/72cd4e40126a7dfab52964b3ba478030ff836a": "01cd6aa6c684d6ea100dda4008f9646c",
".git/objects/bb/6ed10577a9610d9fe30d0875b0bdf59644497a": "1a940691fc80ce14280ff0d422604c1a",
".git/objects/bc/1aa6f72aab48fca80a534bdd7e25d929cdf19c": "798d7144f4b5d49c9a7ddbe980cdaab3",
".git/objects/be/e69b8411682879ac390cae4b730fc2814f4cf6": "3c57db31e9e1e6250c78a075fdb46a90",
".git/objects/bf/0614f5e1ff56b5e87daf3290405654c931cfbf": "2a6736ca1dee5d44ce0559cbe6f1ad89",
".git/objects/c2/6feb1f328c55aadb90f2cd2527996b8401f321": "108c24393e3c18757755baf0d1830de1",
".git/objects/c2/9ae1dfb950d280ff5100de016ad01f6e85b270": "0ce083bd9df6f6ba6cb6f58332a6c073",
".git/objects/c3/18c8f416dffd0982a084105cbd60e11e97d965": "7d9c2b3e88e276c53d7cf94aa6c51612",
".git/objects/c3/a4a04b1c4fcc00a20391d81ec84d1b7c6a0730": "d654f3d7f4100add4b850f18dd132259",
".git/objects/c4/515de4c12a1e1fd03d31ab56fbdb7d463ec8e8": "1cea43c34b5759c1eadb476032d866b6",
".git/objects/c6/e192925163cf686eff1726d0ba44f9f559ca01": "689b72e1ea4cf191df4b10f31d8c6221",
".git/objects/cb/59239e3b4cc1e59535d64c7ab1daf29e0f046d": "7ade5e5269f1435376d6c758d7762dd5",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/a7a47fa7e1dc1fcd95cc75088cf7499a304a75": "c4094328b7629f8a2dee04f21c25a497",
".git/objects/ce/af025cefe6fb5d97c91692e6ce24b99593fa60": "44340d7db91e444d81d7b54d506a8fbb",
".git/objects/d1/45285e6ec7481c87b922205b8c28f501801feb": "b20bd405010b28d108673ee6f0443c26",
".git/objects/d2/64c3fb1bbb7830dd28ab199bd73f878f17808c": "028b3f08569430cd976732ffcae68b94",
".git/objects/d2/6dd7b289ad0a5ca2a738055bb566dc3683657c": "befb72dc86120e6aa1764936c6b16c1d",
".git/objects/d3/433c16b3382b8e5fb603006d7c1c2104ae9212": "ea858cfba8bef6af561d0250fc57f041",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/5c41a31adf4dab3de0d3faba678d66e2420f77": "669e0602b5829a425031799c8300b77d",
".git/objects/d8/a69d5d901cc8c6021569ddf36cee721de26c73": "4a96c2ec159bd42ed39ae0288d71a263",
".git/objects/db/c33c6f7132ee767b4c15f1812637be41a0419c": "873f360434d8afd9d1cf995735c43bb6",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/c3e598dfcac95750865ffc8abc5144e66fbebe": "85d59670eb7144a1479359c02bb2c8e7",
".git/objects/df/65dea985971c89e16f4ba3fcadb8f906a1a76f": "19c0a34af200bed4abfc0d955e80ebb9",
".git/objects/e3/7c0f44edc1309a17e4b4554856d219c61820b4": "81eb216d80f6e16830fc4132a6ad5150",
".git/objects/e5/0ddc9bc33453c0f4f2e1d13f8aacb352f1bf53": "7f83787d7c965b36eb5037ddb2fadae6",
".git/objects/e5/522d377498e205abc8e9af939c9a56a9ddf4e2": "e91b8db8ab860fb744c17b19e84c1014",
".git/objects/e6/0ea1fdebe5fa8430497474d38200cdb2fa61a6": "9f37e45afbd9670201eef397142dcd48",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/12d4b41192ddacd3e6d172b2d052cb303c784a": "b70f21e69ea63ec3930d18d867f1dca0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/7d2fec584d0883e5ff441290400b07d6a09f0f": "cdb3fdaccb0bbf03f6e667b88464eaa8",
".git/objects/f0/fe2f05ac629a89096d8decacf5de3dc058823e": "7a5712b31f9c5a6c779d7ecd418bdd8a",
".git/objects/f2/78ada47ee2324382d27f500221edf06d039729": "24d9a1ff0c41ee94224eef81523d956a",
".git/objects/f3/8b2421351c7c80e5cce4c0eed7c2e23a3b0306": "78ba1eea36ecc38c6e94713b8231ce69",
".git/objects/f3/92bb78f1f66aa105e4ffb4ee8368bbe1f441cd": "e9d9eb6af68e3038138f0b0a8c82e44d",
".git/objects/f5/8b31c05819f7f684b7347e28835fcd975c7199": "b5072978519a5fb40b6d1d7ccd185442",
".git/objects/f6/ef17ee26ac06899f161d1d28a60d22532b0b1c": "b52e4b4d7a0001da50b555067ff21955",
".git/objects/f7/fb215fa41c035e5d2ecc591a3cb1b64361ca17": "3d142bf12994b8a83d37cccab5758991",
".git/objects/f8/fcc014752242bc06600ede45e1c62a31e20dce": "373a707373e61131a77ef3bb75035949",
".git/objects/fb/795cc348949ce0db882aa40072c7449bb2f727": "65ce84d596d43967fa0acb170ad02375",
".git/objects/fd/4d850beea5216e8afa4e39d1a7e2fc95750863": "d01c8059c1ade8188bf298ff23cd03ad",
".git/ORIG_HEAD": "827f1ec86d26e4585d5c46be440251bd",
".git/refs/heads/main": "4626e78e15d95d8688892db3727836b1",
".git/refs/remotes/origin/main": "4626e78e15d95d8688892db3727836b1",
".git/refs/tags/v1.0.0-demo": "57a9989dd69122edb747846b07aac288",
".git/refs/tags/v1.5.0-preview": "9999e3bec575eb91f76451285c0d130b",
"assets/AssetManifest.json": "9238b3fd8c4b00169cc7228a902f2730",
"assets/assets/logo.json": "92489f240aa6000820e6c228a02a1fc4",
"assets/assets/logo.png": "9c5aad22c16d0efcd55abd91d0379bb8",
"assets/assets/splash.png": "fd21cee2fe175e45caac0e0c7740da98",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "96da031dd2a4289583817d3a6d4e3bd6",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "fc32e2aeae57a9718b3579b8a4864a9c",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "551617976e4c3ed884fe181b78b7f21d",
"icons/Icon-512.png": "56edc301c61c0c2f51e9c7625fe2eb35",
"icons/Icon-maskable-192.png": "551617976e4c3ed884fe181b78b7f21d",
"icons/Icon-maskable-512.png": "56edc301c61c0c2f51e9c7625fe2eb35",
"index.html": "b81249be27ea5c489c307246e15f4d76",
"/": "b81249be27ea5c489c307246e15f4d76",
"main.dart.js": "03b2fa1adf37b57406ffe2edd14b0dc3",
"manifest.json": "6e46970bd53f45e3e0e5ef09a47f3da4",
"splash/img/dark-4x.png": "f062522aa1e54bb839386993a158bf31",
"splash/img/light-4x.png": "f062522aa1e54bb839386993a158bf31",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "4e802ea1201357b3c3fc880552010630",
"version.json": "7d73e722503d92cf75635a50a9fa1780"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
