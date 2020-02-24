var tree22 = function(engine)
{
	'use strict';
	var s = {
		textures:
		{
			"AF05brk":
			{
				initGlobal: function (global, url, index, loaded)
				{
					var texture = global.texture = gl.createTexture();
					var image = global.image = new Image();
					image.onload = function ()
					{
						gl.bindTexture(gl.TEXTURE_2D, texture);
						gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, this);
						gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
						gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
						gl.generateMipmap(gl.TEXTURE_2D);
						gl.bindTexture(gl.TEXTURE_2D, null);
						loaded();
					};
					image.src = url + 'AF05brk.jpg';
				},

				doneGlobal: function (global)
				{
					gl.deleteTexture(global.texture);
				},

				copy: function (global, ostate, b)
				{
					ostate[b] = global.texture;
				}
			},

			"AF05brk2":
			{
				initGlobal: function (global, url, index, loaded)
				{
					var texture = global.texture = gl.createTexture();
					var image = global.image = new Image();
					image.onload = function ()
					{
						gl.bindTexture(gl.TEXTURE_2D, texture);
						gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, this);
						gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
						gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
						gl.generateMipmap(gl.TEXTURE_2D);
						gl.bindTexture(gl.TEXTURE_2D, null);
						loaded();
					};
					image.src = url + 'AF05brk2.jpg';
				},

				doneGlobal: function (global)
				{
					gl.deleteTexture(global.texture);
				},

				copy: function (global, ostate, b)
				{
					ostate[b] = global.texture;
				}
			},

			"AF05lef4":
			{
				initGlobal: function (global, url, index, loaded)
				{
					var texture = global.texture = gl.createTexture();
					var image = global.image = new Image();
					image.onload = function ()
					{
						gl.bindTexture(gl.TEXTURE_2D, texture);
						gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this);
						gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
						gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
						gl.generateMipmap(gl.TEXTURE_2D);
						gl.bindTexture(gl.TEXTURE_2D, null);
						loaded();
					};
					image.src = url + 'AF05lef4.png';
				},

				doneGlobal: function (global)
				{
					gl.deleteTexture(global.texture);
				},

				copy: function (global, ostate, b)
				{
					ostate[b] = global.texture;
				}
			},

			"AF05thn":
			{
				initGlobal: function (global, url, index, loaded)
				{
					var texture = global.texture = gl.createTexture();
					var image = global.image = new Image();
					image.onload = function ()
					{
						gl.bindTexture(gl.TEXTURE_2D, texture);
						gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, this);
						gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
						gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
						gl.generateMipmap(gl.TEXTURE_2D);
						gl.bindTexture(gl.TEXTURE_2D, null);
						loaded();
					};
					image.src = url + 'AF05thn.jpg';
				},

				doneGlobal: function (global)
				{
					gl.deleteTexture(global.texture);
				},

				copy: function (global, ostate, b)
				{
					ostate[b] = global.texture;
				}
			}

		},

		scenes:
		{
			"tree22":
			{
				shaders:
				{
					// mesh, shader 'AF05m:brk3'
					m_AF05m_cbrk3:
					{
					},
					// mesh, shader 'AF05m:brk1'
					m_AF05m_cbrk1:
					{
					},
					// mesh, shader 'AF05m:lef5'
					m_AF05m_clef5:
					{
					},
					// mesh, shader 'AF05m:thn1'
					m_AF05m_cthn1:
					{
					}
				},

				initGlobal: function(global, data)
				{
					// mesh, shader 'AF05m:brk3'
					var vsm_AF05m_cbrk3 =
'precision highp float;\n\
uniform vec4 _b[4];\n\
uniform vec4 _d[7];\n\
attribute vec3 _1;\n\
attribute vec3 _0;\n\
attribute vec2 _2;\n\
varying vec2 _e;\n\
varying vec3 _f;\n\
void main()\n\
{\n\
	vec3 a = _0 * vec3(4.71374e-4, 4.86941e-4, 6.53506e-4) + vec3(-10.3087, -14.2808, -7.85112);\n\
	vec3 b = _1;\n\
	vec3 c = _d[0].xyz * a.x + _d[1].xyz * a.y + _d[2].xyz * a.z + _d[3].xyz;\n\
	gl_Position = _b[0] * c.x + _b[1] * c.y + _b[2] * c.z + _b[3];\n\
	_e = _2;\n\
	_f = _d[4].xyz * b.x + _d[5].xyz * b.y + _d[6].xyz * b.z;\n\
}\n\
';
					var psm_AF05m_cbrk3 =
'precision highp float;\n\
uniform sampler2D _c;\n\
uniform float f_f;\n\
varying vec2 _e;\n\
varying vec3 _f;\n\
void main()\n\
{\n\
	vec3 a = (_f);\n\
	vec3 b = a * a;\n\
	vec3 c = a * inversesqrt(b.x + b.y + b.z) * f_f * vec3(-0.408248, 0.408248, 0.816497);\n\
	vec3 d = texture2D(_c, _e * vec2(4.0, 20.6) * vec2(1.0, -1.0) + vec2(0.0, 1.0)).xyz * (vec3(max(c.x + c.y + c.z, 0.0) * 0.8) + 0.392157);\n\
	gl_FragColor = vec4(d, 1.0);\n\
}\n\
';

					var d = new engine.Decompressor(new Uint8Array(data, 0));
					var b1 = d.decompress8(744324);
					var b2 = d.decompress16(1240540);
					var vb = new Float32Array(1984864);
					for (var i = 0, j = 0; i < 248108; ++i, j += 8)
					{
						vb[j + 0] = b2[i + 0];
						vb[j + 1] = b2[i + 248108];
						vb[j + 2] = b2[i + 496216];
						vb[j + 3] = b2[i + 744324] * 1.5259e-5;
						vb[j + 4] = b2[i + 992432] * 1.5259e-5;
						vb[j + 5] = (b1[i + 0] << 24) * 4.65661e-10;
						vb[j + 6] = (b1[i + 248108] << 24) * 4.65661e-10;
						vb[j + 7] = (b1[i + 496216] << 24) * 4.65661e-10;
					}
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0 = gl.createBuffer());
					gl.bufferData(gl.ARRAY_BUFFER, vb, gl.STATIC_DRAW);

					var b = d.decompress16(931164);
					var ib = new Uint16Array(931164);
					for (var i = 0, j = 0; i < 310388; ++i, j += 3)
					{
						ib[j] = b[i];
						ib[j + 1] = b[i + 310388];
						ib[j + 2] = b[i + 620776];
					}
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0 = gl.createBuffer());
					gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, ib, gl.STATIC_DRAW);

					var shaders = global.shaders;
					{
						var shader = shaders.m_AF05m_cbrk3;
						var vertexShader = engine.createVertexShader(vsm_AF05m_cbrk3, "mesh, shader 'AF05m:brk3'");
						var pixelShader = engine.createPixelShader(psm_AF05m_cbrk3, "mesh, shader 'AF05m:brk3'");
						var program = shader.program = gl.createProgram();
						gl.attachShader(program, vertexShader);
						gl.attachShader(program, pixelShader);
						gl.bindAttribLocation(program, 1, '_1');
						gl.bindAttribLocation(program, 0, '_0');
						gl.bindAttribLocation(program, 2, '_2');
						gl.linkProgram(program);
						gl.deleteShader(vertexShader);
						gl.deleteShader(pixelShader);
						gl.useProgram(program);
						shader._b = gl.getUniformLocation(program, '_b');
						gl.uniform1i(gl.getUniformLocation(program, '_c'), 0);
						shader._d = gl.getUniformLocation(program, '_d');
						shader.f_f = gl.getUniformLocation(program, 'f_f');
					}
				},

				doneGlobal: function(global)
				{
					gl.deleteBuffer(global.shaderInputBuffer0);
					gl.deleteBuffer(global.indexBuffer0);
					gl.deleteProgram(global.shaders.m_AF05m_cbrk3.program);
					gl.deleteProgram(global.shaders.m_AF05m_cbrk1.program);
					gl.deleteProgram(global.shaders.m_AF05m_clef5.program);
					gl.deleteProgram(global.shaders.m_AF05m_cthn1.program);
				},

				render: {
					m_AF05m_cbrk3_5: function(renderJob)
					{
						var instance = renderJob.instance;
						var global = instance.global;
						var shader = global.shaders.m_AF05m_cbrk3;
						var transfer = instance.shaders.m_AF05m_cbrk3.transfer;
						var _a = transfer._a;
						var matrix = renderJob.data;
						var flip;
						var _d = instance.fu0_28;
						var a = matrix[0];
						var b = matrix[1];
						var c = matrix[2];
						var d = matrix[3];
						var e = matrix[4];
						var f = matrix[5];
						var g = matrix[6];
						var h = matrix[7];
						var i = matrix[8];
						var j = matrix[9];
						var k = matrix[10];
						var l = matrix[11];
						var m = matrix[12];
						var n = matrix[13];
						var o = matrix[14];
						var p = matrix[15];
						var q = _a[0];
						var r = _a[1];
						var s = _a[2];
						var t = _a[3];
						var u = _a[4];
						var v = _a[5];
						var w = _a[6];
						var x = _a[7];
						var y = _a[8];
						var z = _a[9];
						var A = _a[10];
						var B = _a[11];
						var C = _a[12];
						var D = _a[13];
						var E = _a[14];
						var F = _a[15];
						var G = q * a + u * b + y * c + C * d;
						var H = r * a + v * b + z * c + D * d;
						var I = s * a + w * b + A * c + E * d;
						var J = q * e + u * f + y * g + C * h;
						var K = r * e + v * f + z * g + D * h;
						var L = s * e + w * f + A * g + E * h;
						var M = q * i + u * j + y * k + C * l;
						var N = r * i + v * j + z * k + D * l;
						var O = s * i + w * j + A * k + E * l;
						var P = K * O - L * N;
						var Q = L * M - J * O;
						var R = J * N - K * M;
						flip = G * P + H * Q + I * R < 0.0;
						_d[0] = G;
						_d[1] = H;
						_d[2] = I;
						_d[4] = J;
						_d[5] = K;
						_d[6] = L;
						_d[8] = M;
						_d[9] = N;
						_d[10] = O;
						_d[12] = q * m + u * n + y * o + C * p;
						_d[13] = r * m + v * n + z * o + D * p;
						_d[14] = s * m + w * n + A * o + E * p;
						_d[16] = P;
						_d[17] = Q;
						_d[18] = R;
						_d[20] = N * I - O * H;
						_d[21] = O * G - M * I;
						_d[22] = M * H - N * G;
						_d[24] = H * L - I * K;
						_d[25] = I * J - G * L;
						_d[26] = G * K - H * J;
						gl.uniform4fv(shader._d, _d);
						gl.uniform1f(shader.f_f, flip ? -1.0 : 1.0);
						gl.cullFace(flip ? gl.FRONT : gl.BACK);
						renderJob.draw(instance, shader);
						gl.uniform1f(shader.f_f, flip ? 1.0 : -1.0);
						gl.cullFace(flip ? gl.BACK : gl.FRONT);
						renderJob.draw(instance, shader);
					},
					m_AF05m_cbrk1_5: function(renderJob)
					{
						var instance = renderJob.instance;
						var global = instance.global;
						var shader = global.shaders.m_AF05m_cbrk3;
						var transfer = instance.shaders.m_AF05m_cbrk1.transfer;
						var _a = transfer._a;
						var matrix = renderJob.data;
						var flip;
						var _d = instance.fu0_28;
						var a = matrix[0];
						var b = matrix[1];
						var c = matrix[2];
						var d = matrix[3];
						var e = matrix[4];
						var f = matrix[5];
						var g = matrix[6];
						var h = matrix[7];
						var i = matrix[8];
						var j = matrix[9];
						var k = matrix[10];
						var l = matrix[11];
						var m = matrix[12];
						var n = matrix[13];
						var o = matrix[14];
						var p = matrix[15];
						var q = _a[0];
						var r = _a[1];
						var s = _a[2];
						var t = _a[3];
						var u = _a[4];
						var v = _a[5];
						var w = _a[6];
						var x = _a[7];
						var y = _a[8];
						var z = _a[9];
						var A = _a[10];
						var B = _a[11];
						var C = _a[12];
						var D = _a[13];
						var E = _a[14];
						var F = _a[15];
						var G = q * a + u * b + y * c + C * d;
						var H = r * a + v * b + z * c + D * d;
						var I = s * a + w * b + A * c + E * d;
						var J = q * e + u * f + y * g + C * h;
						var K = r * e + v * f + z * g + D * h;
						var L = s * e + w * f + A * g + E * h;
						var M = q * i + u * j + y * k + C * l;
						var N = r * i + v * j + z * k + D * l;
						var O = s * i + w * j + A * k + E * l;
						var P = K * O - L * N;
						var Q = L * M - J * O;
						var R = J * N - K * M;
						flip = G * P + H * Q + I * R < 0.0;
						_d[0] = G;
						_d[1] = H;
						_d[2] = I;
						_d[4] = J;
						_d[5] = K;
						_d[6] = L;
						_d[8] = M;
						_d[9] = N;
						_d[10] = O;
						_d[12] = q * m + u * n + y * o + C * p;
						_d[13] = r * m + v * n + z * o + D * p;
						_d[14] = s * m + w * n + A * o + E * p;
						_d[16] = P;
						_d[17] = Q;
						_d[18] = R;
						_d[20] = N * I - O * H;
						_d[21] = O * G - M * I;
						_d[22] = M * H - N * G;
						_d[24] = H * L - I * K;
						_d[25] = I * J - G * L;
						_d[26] = G * K - H * J;
						gl.uniform4fv(shader._d, _d);
						gl.uniform1f(shader.f_f, flip ? -1.0 : 1.0);
						gl.cullFace(flip ? gl.FRONT : gl.BACK);
						renderJob.draw(instance, shader);
						gl.uniform1f(shader.f_f, flip ? 1.0 : -1.0);
						gl.cullFace(flip ? gl.BACK : gl.FRONT);
						renderJob.draw(instance, shader);
					},
					m_AF05m_clef5_5: function(renderJob)
					{
						var instance = renderJob.instance;
						var global = instance.global;
						var shader = global.shaders.m_AF05m_cbrk3;
						var transfer = instance.shaders.m_AF05m_clef5.transfer;
						var _a = transfer._a;
						var matrix = renderJob.data;
						var flip;
						var _d = instance.fu0_28;
						var a = matrix[0];
						var b = matrix[1];
						var c = matrix[2];
						var d = matrix[3];
						var e = matrix[4];
						var f = matrix[5];
						var g = matrix[6];
						var h = matrix[7];
						var i = matrix[8];
						var j = matrix[9];
						var k = matrix[10];
						var l = matrix[11];
						var m = matrix[12];
						var n = matrix[13];
						var o = matrix[14];
						var p = matrix[15];
						var q = _a[0];
						var r = _a[1];
						var s = _a[2];
						var t = _a[3];
						var u = _a[4];
						var v = _a[5];
						var w = _a[6];
						var x = _a[7];
						var y = _a[8];
						var z = _a[9];
						var A = _a[10];
						var B = _a[11];
						var C = _a[12];
						var D = _a[13];
						var E = _a[14];
						var F = _a[15];
						var G = q * a + u * b + y * c + C * d;
						var H = r * a + v * b + z * c + D * d;
						var I = s * a + w * b + A * c + E * d;
						var J = q * e + u * f + y * g + C * h;
						var K = r * e + v * f + z * g + D * h;
						var L = s * e + w * f + A * g + E * h;
						var M = q * i + u * j + y * k + C * l;
						var N = r * i + v * j + z * k + D * l;
						var O = s * i + w * j + A * k + E * l;
						var P = K * O - L * N;
						var Q = L * M - J * O;
						var R = J * N - K * M;
						flip = G * P + H * Q + I * R < 0.0;
						_d[0] = G;
						_d[1] = H;
						_d[2] = I;
						_d[4] = J;
						_d[5] = K;
						_d[6] = L;
						_d[8] = M;
						_d[9] = N;
						_d[10] = O;
						_d[12] = q * m + u * n + y * o + C * p;
						_d[13] = r * m + v * n + z * o + D * p;
						_d[14] = s * m + w * n + A * o + E * p;
						_d[16] = P;
						_d[17] = Q;
						_d[18] = R;
						_d[20] = N * I - O * H;
						_d[21] = O * G - M * I;
						_d[22] = M * H - N * G;
						_d[24] = H * L - I * K;
						_d[25] = I * J - G * L;
						_d[26] = G * K - H * J;
						gl.uniform4fv(shader._d, _d);
						gl.uniform1f(shader.f_f, flip ? -1.0 : 1.0);
						gl.cullFace(flip ? gl.FRONT : gl.BACK);
						renderJob.draw(instance, shader);
						gl.uniform1f(shader.f_f, flip ? 1.0 : -1.0);
						gl.cullFace(flip ? gl.BACK : gl.FRONT);
						renderJob.draw(instance, shader);
					},
					m_AF05m_cthn1_5: function(renderJob)
					{
						var instance = renderJob.instance;
						var global = instance.global;
						var shader = global.shaders.m_AF05m_cbrk3;
						var transfer = instance.shaders.m_AF05m_cthn1.transfer;
						var _a = transfer._a;
						var matrix = renderJob.data;
						var flip;
						var _d = instance.fu0_28;
						var a = matrix[0];
						var b = matrix[1];
						var c = matrix[2];
						var d = matrix[3];
						var e = matrix[4];
						var f = matrix[5];
						var g = matrix[6];
						var h = matrix[7];
						var i = matrix[8];
						var j = matrix[9];
						var k = matrix[10];
						var l = matrix[11];
						var m = matrix[12];
						var n = matrix[13];
						var o = matrix[14];
						var p = matrix[15];
						var q = _a[0];
						var r = _a[1];
						var s = _a[2];
						var t = _a[3];
						var u = _a[4];
						var v = _a[5];
						var w = _a[6];
						var x = _a[7];
						var y = _a[8];
						var z = _a[9];
						var A = _a[10];
						var B = _a[11];
						var C = _a[12];
						var D = _a[13];
						var E = _a[14];
						var F = _a[15];
						var G = q * a + u * b + y * c + C * d;
						var H = r * a + v * b + z * c + D * d;
						var I = s * a + w * b + A * c + E * d;
						var J = q * e + u * f + y * g + C * h;
						var K = r * e + v * f + z * g + D * h;
						var L = s * e + w * f + A * g + E * h;
						var M = q * i + u * j + y * k + C * l;
						var N = r * i + v * j + z * k + D * l;
						var O = s * i + w * j + A * k + E * l;
						var P = K * O - L * N;
						var Q = L * M - J * O;
						var R = J * N - K * M;
						flip = G * P + H * Q + I * R < 0.0;
						_d[0] = G;
						_d[1] = H;
						_d[2] = I;
						_d[4] = J;
						_d[5] = K;
						_d[6] = L;
						_d[8] = M;
						_d[9] = N;
						_d[10] = O;
						_d[12] = q * m + u * n + y * o + C * p;
						_d[13] = r * m + v * n + z * o + D * p;
						_d[14] = s * m + w * n + A * o + E * p;
						_d[16] = P;
						_d[17] = Q;
						_d[18] = R;
						_d[20] = N * I - O * H;
						_d[21] = O * G - M * I;
						_d[22] = M * H - N * G;
						_d[24] = H * L - I * K;
						_d[25] = I * J - G * L;
						_d[26] = G * K - H * J;
						gl.uniform4fv(shader._d, _d);
						gl.uniform1f(shader.f_f, flip ? -1.0 : 1.0);
						gl.cullFace(flip ? gl.FRONT : gl.BACK);
						renderJob.draw(instance, shader);
						gl.uniform1f(shader.f_f, flip ? 1.0 : -1.0);
						gl.cullFace(flip ? gl.BACK : gl.FRONT);
						renderJob.draw(instance, shader);
					}
				},
				draw: {
					a: function(instance, shader)
					{
						var global = instance.global;
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 32, 5932788);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 32, 5932768);
						gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 32, 5932780);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 133272, gl.UNSIGNED_SHORT, 1430328);
					},
					b: function(instance, shader)
					{
						var global = instance.global;
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 32, 6266900);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 32, 6266880);
						gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 32, 6266892);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 82728, gl.UNSIGNED_SHORT, 1696872);
					},
					c: function(instance, shader)
					{
						var global = instance.global;
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 32, 20);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 32, 0);
						gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 32, 12);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 140499, gl.UNSIGNED_SHORT, 0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 32, 2097140);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 32, 2097120);
						gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 32, 2097132);
						gl.drawElements(gl.TRIANGLES, 42273, gl.UNSIGNED_SHORT, 280998);
					},
					d: function(instance, shader)
					{
						var global = instance.global;
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 32, 2088980);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 32, 2088960);
						gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 32, 2088972);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 242517, gl.UNSIGNED_SHORT, 365544);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 32, 4185684);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 32, 4185664);
						gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 32, 4185676);
						gl.drawElements(gl.TRIANGLES, 289875, gl.UNSIGNED_SHORT, 850578);
					}
				},

				createInstance: function(global, renderer)
				{
					var instance = 
					{
						global: global,
						renderer: renderer,
						ids: new Uint32Array(1),
						fstate: new Float32Array(1), ostate: [], 
						ouniforms: [], 
						shaders:
						{
							m_AF05m_cbrk3:
							{
								uniform: {_b: new Float32Array(16), _c: null},
								transfer: {_a: new Float32Array(16)},
							},
							m_AF05m_cbrk1:
							{
								uniform: {_b: new Float32Array(16), _c: null},
								transfer: {_a: new Float32Array(16)},
							},
							m_AF05m_clef5:
							{
								uniform: {_b: new Float32Array(16), _c: null},
								transfer: {_a: new Float32Array(16)},
							},
							m_AF05m_cthn1:
							{
								uniform: {_b: new Float32Array(16), _c: null},
								transfer: {_a: new Float32Array(16)},
							}
						},
						itransforms: new Int32Array(1), ftransforms: new Float32Array(16), 
						fboundingBoxes: new Float32Array(6), 
						sceneSequence: 0,
						deformerSequence: 0,
						renderSequence: 0,
						viewProjectionMatrix: new Float32Array(16),
						fu0_28: new Float32Array(28),
					};

					var particlePools = instance.particlePools = {};

					instance.update = function()
					{
						++instance.sceneSequence;

						var fstate = instance.fstate;
						var ostate = instance.ostate;
						var buffers = global.buffers;
						var ouniforms = instance.ouniforms;
						var itransforms = instance.itransforms;
						var ftransforms = instance.ftransforms;
						var fboundingBoxes = instance.fboundingBoxes;

						ftransforms[0] = 1.0;
						ftransforms[1] = 0.0;
						ftransforms[2] = 0.0;
						ftransforms[3] = 0.0;
						ftransforms[4] = 0.0;
						ftransforms[5] = 1.0;
						ftransforms[6] = 0.0;
						ftransforms[7] = 0.0;
						ftransforms[8] = 0.0;
						ftransforms[9] = 0.0;
						ftransforms[10] = 1.0;
						ftransforms[11] = 0.0;
						ftransforms[12] = 0.0;
						ftransforms[13] = 0.0;
						ftransforms[14] = 0.0;
						ftransforms[15] = 1.0;
						itransforms[0] = 1;
						fboundingBoxes[0] = 5.137;
						fboundingBoxes[1] = 1.675;
						fboundingBoxes[2] = 13.5626;
						fboundingBoxes[3] = 15.446;
						fboundingBoxes[4] = 15.9561;
						fboundingBoxes[5] = 21.414;
						ouniforms[0] = ostate[1];
						ouniforms[1] = ostate[0];
						ouniforms[2] = ostate[2];
						ouniforms[3] = ostate[3];
					};

					instance.render = function(viewMatrix, projectionMatrix, layerName, renderQueues)
					{
						instance.renderSequence = ++global.sequence;
						var viewProjectionMatrix = instance.viewProjectionMatrix;
						engine.matrix4x4Mul(projectionMatrix, viewMatrix, viewProjectionMatrix);
						var ouniforms = instance.ouniforms;
						var itransforms = instance.itransforms;
						var ftransforms = instance.ftransforms;
						var fboundingBoxes = instance.fboundingBoxes;

						// mesh, shader 'AF05m:brk3'
						var s_ = instance.shaders.m_AF05m_cbrk3;
						var uniform = s_.uniform;
						var _b = uniform._b;
						var _c = uniform._c;
						var _a = s_.transfer._a;
						_a[0] = viewMatrix[0];
						_a[1] = viewMatrix[1];
						_a[2] = viewMatrix[2];
						_a[3] = viewMatrix[3];
						_a[4] = viewMatrix[4];
						_a[5] = viewMatrix[5];
						_a[6] = viewMatrix[6];
						_a[7] = viewMatrix[7];
						_a[8] = viewMatrix[8];
						_a[9] = viewMatrix[9];
						_a[10] = viewMatrix[10];
						_a[11] = viewMatrix[11];
						_a[12] = viewMatrix[12];
						_a[13] = viewMatrix[13];
						_a[14] = viewMatrix[14];
						_a[15] = viewMatrix[15];
						_b[0] = projectionMatrix[0];
						_b[1] = projectionMatrix[1];
						_b[2] = projectionMatrix[2];
						_b[3] = projectionMatrix[3];
						_b[4] = projectionMatrix[4];
						_b[5] = projectionMatrix[5];
						_b[6] = projectionMatrix[6];
						_b[7] = projectionMatrix[7];
						_b[8] = projectionMatrix[8];
						_b[9] = projectionMatrix[9];
						_b[10] = projectionMatrix[10];
						_b[11] = projectionMatrix[11];
						_b[12] = projectionMatrix[12];
						_b[13] = projectionMatrix[13];
						_b[14] = projectionMatrix[14];
						_b[15] = projectionMatrix[15];
						uniform._c = ouniforms[0];
						s_.renderJobs = null;
						// mesh, shader 'AF05m:brk1'
						var s_ = instance.shaders.m_AF05m_cbrk1;
						var uniform = s_.uniform;
						var _b = uniform._b;
						var _c = uniform._c;
						var _a = s_.transfer._a;
						_a[0] = viewMatrix[0];
						_a[1] = viewMatrix[1];
						_a[2] = viewMatrix[2];
						_a[3] = viewMatrix[3];
						_a[4] = viewMatrix[4];
						_a[5] = viewMatrix[5];
						_a[6] = viewMatrix[6];
						_a[7] = viewMatrix[7];
						_a[8] = viewMatrix[8];
						_a[9] = viewMatrix[9];
						_a[10] = viewMatrix[10];
						_a[11] = viewMatrix[11];
						_a[12] = viewMatrix[12];
						_a[13] = viewMatrix[13];
						_a[14] = viewMatrix[14];
						_a[15] = viewMatrix[15];
						_b[0] = projectionMatrix[0];
						_b[1] = projectionMatrix[1];
						_b[2] = projectionMatrix[2];
						_b[3] = projectionMatrix[3];
						_b[4] = projectionMatrix[4];
						_b[5] = projectionMatrix[5];
						_b[6] = projectionMatrix[6];
						_b[7] = projectionMatrix[7];
						_b[8] = projectionMatrix[8];
						_b[9] = projectionMatrix[9];
						_b[10] = projectionMatrix[10];
						_b[11] = projectionMatrix[11];
						_b[12] = projectionMatrix[12];
						_b[13] = projectionMatrix[13];
						_b[14] = projectionMatrix[14];
						_b[15] = projectionMatrix[15];
						uniform._c = ouniforms[1];
						s_.renderJobs = null;
						// mesh, shader 'AF05m:lef5'
						var s_ = instance.shaders.m_AF05m_clef5;
						var uniform = s_.uniform;
						var _b = uniform._b;
						var _c = uniform._c;
						var _a = s_.transfer._a;
						_a[0] = viewMatrix[0];
						_a[1] = viewMatrix[1];
						_a[2] = viewMatrix[2];
						_a[3] = viewMatrix[3];
						_a[4] = viewMatrix[4];
						_a[5] = viewMatrix[5];
						_a[6] = viewMatrix[6];
						_a[7] = viewMatrix[7];
						_a[8] = viewMatrix[8];
						_a[9] = viewMatrix[9];
						_a[10] = viewMatrix[10];
						_a[11] = viewMatrix[11];
						_a[12] = viewMatrix[12];
						_a[13] = viewMatrix[13];
						_a[14] = viewMatrix[14];
						_a[15] = viewMatrix[15];
						_b[0] = projectionMatrix[0];
						_b[1] = projectionMatrix[1];
						_b[2] = projectionMatrix[2];
						_b[3] = projectionMatrix[3];
						_b[4] = projectionMatrix[4];
						_b[5] = projectionMatrix[5];
						_b[6] = projectionMatrix[6];
						_b[7] = projectionMatrix[7];
						_b[8] = projectionMatrix[8];
						_b[9] = projectionMatrix[9];
						_b[10] = projectionMatrix[10];
						_b[11] = projectionMatrix[11];
						_b[12] = projectionMatrix[12];
						_b[13] = projectionMatrix[13];
						_b[14] = projectionMatrix[14];
						_b[15] = projectionMatrix[15];
						uniform._c = ouniforms[2];
						s_.renderJobs = null;
						// mesh, shader 'AF05m:thn1'
						var s_ = instance.shaders.m_AF05m_cthn1;
						var uniform = s_.uniform;
						var _b = uniform._b;
						var _c = uniform._c;
						var _a = s_.transfer._a;
						_a[0] = viewMatrix[0];
						_a[1] = viewMatrix[1];
						_a[2] = viewMatrix[2];
						_a[3] = viewMatrix[3];
						_a[4] = viewMatrix[4];
						_a[5] = viewMatrix[5];
						_a[6] = viewMatrix[6];
						_a[7] = viewMatrix[7];
						_a[8] = viewMatrix[8];
						_a[9] = viewMatrix[9];
						_a[10] = viewMatrix[10];
						_a[11] = viewMatrix[11];
						_a[12] = viewMatrix[12];
						_a[13] = viewMatrix[13];
						_a[14] = viewMatrix[14];
						_a[15] = viewMatrix[15];
						_b[0] = projectionMatrix[0];
						_b[1] = projectionMatrix[1];
						_b[2] = projectionMatrix[2];
						_b[3] = projectionMatrix[3];
						_b[4] = projectionMatrix[4];
						_b[5] = projectionMatrix[5];
						_b[6] = projectionMatrix[6];
						_b[7] = projectionMatrix[7];
						_b[8] = projectionMatrix[8];
						_b[9] = projectionMatrix[9];
						_b[10] = projectionMatrix[10];
						_b[11] = projectionMatrix[11];
						_b[12] = projectionMatrix[12];
						_b[13] = projectionMatrix[13];
						_b[14] = projectionMatrix[14];
						_b[15] = projectionMatrix[15];
						uniform._c = ouniforms[3];
						s_.renderJobs = null;

						var jobIt = renderQueues.begin;
						var jobEnd = renderQueues.end;
						if (itransforms[0])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_AF05m_cbrk1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_AF05m_cbrk1_5;
								var data = renderJob.data;
								data[0] = ftransforms[0];
								data[1] = ftransforms[1];
								data[2] = ftransforms[2];
								data[3] = ftransforms[3];
								data[4] = ftransforms[4];
								data[5] = ftransforms[5];
								data[6] = ftransforms[6];
								data[7] = ftransforms[7];
								data[8] = ftransforms[8];
								data[9] = ftransforms[9];
								data[10] = ftransforms[10];
								data[11] = ftransforms[11];
								data[12] = ftransforms[12];
								data[13] = ftransforms[13];
								data[14] = ftransforms[14];
								data[15] = ftransforms[15];
								renderJob.draw = global.draw.a;
								renderJob.instance = instance;
							}
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_AF05m_clef5;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_AF05m_clef5_5;
								var data = renderJob.data;
								data[0] = ftransforms[0];
								data[1] = ftransforms[1];
								data[2] = ftransforms[2];
								data[3] = ftransforms[3];
								data[4] = ftransforms[4];
								data[5] = ftransforms[5];
								data[6] = ftransforms[6];
								data[7] = ftransforms[7];
								data[8] = ftransforms[8];
								data[9] = ftransforms[9];
								data[10] = ftransforms[10];
								data[11] = ftransforms[11];
								data[12] = ftransforms[12];
								data[13] = ftransforms[13];
								data[14] = ftransforms[14];
								data[15] = ftransforms[15];
								renderJob.draw = global.draw.b;
								renderJob.instance = instance;
							}
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_AF05m_cbrk3;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_AF05m_cbrk3_5;
								var data = renderJob.data;
								data[0] = ftransforms[0];
								data[1] = ftransforms[1];
								data[2] = ftransforms[2];
								data[3] = ftransforms[3];
								data[4] = ftransforms[4];
								data[5] = ftransforms[5];
								data[6] = ftransforms[6];
								data[7] = ftransforms[7];
								data[8] = ftransforms[8];
								data[9] = ftransforms[9];
								data[10] = ftransforms[10];
								data[11] = ftransforms[11];
								data[12] = ftransforms[12];
								data[13] = ftransforms[13];
								data[14] = ftransforms[14];
								data[15] = ftransforms[15];
								renderJob.draw = global.draw.d;
								renderJob.instance = instance;
							}
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_AF05m_cthn1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_AF05m_cthn1_5;
								var data = renderJob.data;
								data[0] = ftransforms[0];
								data[1] = ftransforms[1];
								data[2] = ftransforms[2];
								data[3] = ftransforms[3];
								data[4] = ftransforms[4];
								data[5] = ftransforms[5];
								data[6] = ftransforms[6];
								data[7] = ftransforms[7];
								data[8] = ftransforms[8];
								data[9] = ftransforms[9];
								data[10] = ftransforms[10];
								data[11] = ftransforms[11];
								data[12] = ftransforms[12];
								data[13] = ftransforms[13];
								data[14] = ftransforms[14];
								data[15] = ftransforms[15];
								renderJob.draw = global.draw.c;
								renderJob.instance = instance;
							}
						}
						renderQueues.begin = jobIt;
						var shader = global.shaders.m_AF05m_cbrk3;
						var shader = global.shaders.m_AF05m_cbrk3;
						gl.useProgram(shader.program);
						var uniform = instance.shaders.m_AF05m_cbrk3.uniform;
						gl.uniform4fv(shader._b, uniform._b);
						gl.bindTexture(gl.TEXTURE_2D, uniform._c);
						gl.enable(gl.CULL_FACE);
						gl.enableVertexAttribArray(2);
						var current = instance.shaders.m_AF05m_cbrk3.renderJobs;
						while (current)
						{
							current.render(current);
							current = current.next;
						}
						gl.bindTexture(gl.TEXTURE_2D, null);
						var shader = global.shaders.m_AF05m_cbrk3;
						var shader = global.shaders.m_AF05m_cbrk3;
						gl.useProgram(shader.program);
						var uniform = instance.shaders.m_AF05m_cbrk1.uniform;
						gl.uniform4fv(shader._b, uniform._b);
						gl.bindTexture(gl.TEXTURE_2D, uniform._c);
						gl.enable(gl.CULL_FACE);
						var current = instance.shaders.m_AF05m_cbrk1.renderJobs;
						while (current)
						{
							current.render(current);
							current = current.next;
						}
						gl.bindTexture(gl.TEXTURE_2D, null);
						var shader = global.shaders.m_AF05m_cbrk3;
						var shader = global.shaders.m_AF05m_cbrk3;
						gl.useProgram(shader.program);
						var uniform = instance.shaders.m_AF05m_clef5.uniform;
						gl.uniform4fv(shader._b, uniform._b);
						gl.bindTexture(gl.TEXTURE_2D, uniform._c);
						gl.enable(gl.CULL_FACE);
						var current = instance.shaders.m_AF05m_clef5.renderJobs;
						while (current)
						{
							current.render(current);
							current = current.next;
						}
						gl.bindTexture(gl.TEXTURE_2D, null);
						var shader = global.shaders.m_AF05m_cbrk3;
						var shader = global.shaders.m_AF05m_cbrk3;
						gl.useProgram(shader.program);
						var uniform = instance.shaders.m_AF05m_cthn1.uniform;
						gl.uniform4fv(shader._b, uniform._b);
						gl.bindTexture(gl.TEXTURE_2D, uniform._c);
						gl.enable(gl.CULL_FACE);
						var current = instance.shaders.m_AF05m_cthn1.renderJobs;
						while (current)
						{
							current.render(current);
							current = current.next;
						}
						gl.bindTexture(gl.TEXTURE_2D, null);
						gl.disableVertexAttribArray(2);
					};

					var fstate = instance.fstate;
					var ostate = instance.ostate;

					return instance;
				},

				doneInstance: function(instance)
				{
				},

				sequence: 0,

				attributes:
				{
					"time": {t: 1, b: 0, e: 1}
				},

				textureBindings:
				[
					{n: "AF05brk", b: 0},
					{n: "AF05brk2", b: 1},
					{n: "AF05lef4", b: 2},
					{n: "AF05thn", b: 3}
				],

				objects:
				{
					"AF05m:AF05mShape[0]": 0
				}

			}

		},

		numFiles: 5,
		check: function (){
			return 0;
		}
	};
	return s;
}
(inka3dEngine);
