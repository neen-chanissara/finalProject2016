var num = -15;
var รูดอล์ฟ = function(engine)
{
	'use strict';
	var s = {
		textures:
		{
		},

		scenes:
		{
			"รูดอล์ฟ":
			{
				shaders:
				{
					// mesh, shader 'lambert1'
					m_lambert1:
					{
					}
				},

				initGlobal: function(global, data)
				{
					// mesh, shader 'lambert1'
					var vsm_lambert1 =
'precision highp float;\n\
uniform vec4 _b[4];\n\
uniform vec4 _c[7];\n\
uniform vec4 s_o[2];\n\
attribute vec3 _1;\n\
attribute vec3 _0;\n\
varying vec3 _d;\n\
void main()\n\
{\n\
	vec3 a = _0 * s_o[0].xyz + s_o[1].xyz;\n\
	vec3 b = _1;\n\
	vec3 c = _c[0].xyz * a.x + _c[1].xyz * a.y + _c[2].xyz * a.z + _c[3].xyz;\n\
	gl_Position = _b[0] * c.x + _b[1] * c.y + _b[2] * c.z + _b[3];\n\
	_d = _c[4].xyz * b.x + _c[5].xyz * b.y + _c[6].xyz * b.z;\n\
}\n\
';
					var psm_lambert1 =
'precision highp float;\n\
uniform float f_f;\n\
varying vec3 _d;\n\
void main()\n\
{\n\
	vec3 a = (_d);\n\
	vec3 b = a * a;\n\
	vec3 c = a * inversesqrt(b.x + b.y + b.z) * f_f * vec3(-0.408248, 0.408248, 0.816497);\n\
	vec3 d = vec3(max(c.x + c.y + c.z, 0.0) * 0.803419) * vec3(0.903247, 0.960431, 0.388589) + vec3(0.176638, 0.350423, 0.113771);\n\
	gl_FragColor = vec4(d, 1.0);\n\
}\n\
';

					var d = new engine.Decompressor(new Uint8Array(data, 0));
					var b1 = d.decompress8(1767);
					var b2 = d.decompress16(1767);
					var vb = new Float32Array(3534);
					for (var i = 0, j = 0; i < 589; ++i, j += 6)
					{
						vb[j + 0] = b2[i + 0];
						vb[j + 1] = b2[i + 589];
						vb[j + 2] = b2[i + 1178];
						vb[j + 3] = (b1[i + 0] << 24) * 4.65661e-10;
						vb[j + 4] = (b1[i + 589] << 24) * 4.65661e-10;
						vb[j + 5] = (b1[i + 1178] << 24) * 4.65661e-10;
					}
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0 = gl.createBuffer());
					gl.bufferData(gl.ARRAY_BUFFER, vb, gl.STATIC_DRAW);

					var b = d.decompress16(1560);
					var ib = new Uint16Array(1560);
					for (var i = 0, j = 0; i < 520; ++i, j += 3)
					{
						ib[j] = b[i];
						ib[j + 1] = b[i + 520];
						ib[j + 2] = b[i + 1040];
					}
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0 = gl.createBuffer());
					gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, ib, gl.STATIC_DRAW);

					global.scaleOffset13 = new Float32Array([8.91266e-5, 3.22189e-5, 7.91763e-5, 0.0, 0.271944, 6.28151, -2.68816, 0.0]);
					global.scaleOffset10 = new Float32Array([6.96747e-5, 3.26049e-5, 8.34167e-5, 0.0, -2.08786, 7.93941, -5.53005, 0.0]);
					global.scaleOffset9 = new Float32Array([8.91266e-5, 3.22189e-5, 7.91748e-5, 0.0, -5.75705, 6.28351, -2.70366, 0.0]);
					global.scaleOffset8 = new Float32Array([6.96747e-5, 2.51968e-5, 8.53287e-5, 0.0, -2.10156, 7.91421, 0.00314266, 0.0]);
					global.scaleOffset7 = new Float32Array([4.35684e-5, 1.97128e-5, 3.97186e-5, 0.0, -2.68657, 9.31011, -1.06968, 0.0]);
					global.scaleOffset6 = new Float32Array([4.39148e-5, 1.88186e-5, 3.95874e-5, 0.0, 0.190822, 9.30621, -1.11138, 0.0]);
					global.scaleOffset5 = new Float32Array([9.897e-5, 4.71527e-5, 1.22189e-4, 0.0, -3.06945, 4.29322, -8.34094, 0.0]);
					global.scaleOffset4 = new Float32Array([9.897e-5, 3.5382e-5, 1.29933e-4, 0.0, -3.05585, 4.25961, -0.172335, 0.0]);
					global.scaleOffset3 = new Float32Array([3.00293e-6, 3.00369e-5, 3.00293e-6, 0.0, 0.0795015, 1.50184e-5, -0.431298, 0.0]);
					global.scaleOffset14 = new Float32Array([3.00293e-6, 3.01712e-5, 6.89849e-6, 0.0, 0.0795015, 3.90451, -0.430496, 0.0]);
					global.scaleOffset11 = new Float32Array([3.00293e-6, 3.00369e-5, 3.00445e-6, 0.0, 0.0795015, 5.84931, -0.174398, 0.0]);
					global.scaleOffset12 = new Float32Array([3.00293e-6, 3.01712e-5, 6.89849e-6, 0.0, 0.0795015, 7.78531, -0.173496, 0.0]);
					global.scaleOffset2 = new Float32Array([1.28613e-4, 4.11148e-5, 1.02928e-4, 0.0, 0.276364, 2.54692, -3.73904, 0.0]);
					global.scaleOffset1 = new Float32Array([1.35131e-4, 3.6798e-5, 1.02928e-4, 0.0, -8.70593, 2.51431, -3.73904, 0.0]);
					global.scaleOffset0 = new Float32Array([3.00293e-6, 3.00369e-5, 3.00293e-6, 0.0, 0.0795015, 1.96851, -0.431298, 0.0]);

					var shaders = global.shaders;
					{
						var shader = shaders.m_lambert1;
						var vertexShader = engine.createVertexShader(vsm_lambert1, "mesh, shader 'lambert1'");
						var pixelShader = engine.createPixelShader(psm_lambert1, "mesh, shader 'lambert1'");
						var program = shader.program = gl.createProgram();
						gl.attachShader(program, vertexShader);
						gl.attachShader(program, pixelShader);
						gl.bindAttribLocation(program, 1, '_1');
						gl.bindAttribLocation(program, 0, '_0');
						gl.linkProgram(program);
						gl.deleteShader(vertexShader);
						gl.deleteShader(pixelShader);
						shader._b = gl.getUniformLocation(program, '_b');
						shader._c = gl.getUniformLocation(program, '_c');
						shader.s_o = gl.getUniformLocation(program, 's_o');
						shader.f_f = gl.getUniformLocation(program, 'f_f');
					}
				},

				doneGlobal: function(global)
				{
					gl.deleteBuffer(global.shaderInputBuffer0);
					gl.deleteBuffer(global.indexBuffer0);
					gl.deleteProgram(global.shaders.m_lambert1.program);
				},

				render: {
					m_lambert1_5: function(renderJob)
					{
						var instance = renderJob.instance;
						var global = instance.global;
						var shader = global.shaders.m_lambert1;
						var transfer = instance.shaders.m_lambert1.transfer;
						var _a = transfer._a;
						var matrix = renderJob.data;
						var flip;
						var _c = instance.fu0_28;
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
						_c[0] = G;
						_c[1] = H;
						_c[2] = I;
						_c[4] = J;
						_c[5] = K;
						_c[6] = L;
						_c[8] = M;
						_c[9] = N;
						_c[10] = O;
						_c[12] = q * m + u * n + y * o + C * p;
						_c[13] = r * m + v * n + z * o + D * p;
						_c[14] = s * m + w * n + A * o + E * p;
						_c[16] = P;
						_c[17] = Q;
						_c[18] = R;
						_c[20] = N * I - O * H;
						_c[21] = O * G - M * I;
						_c[22] = M * H - N * G;
						_c[24] = H * L - I * K;
						_c[25] = I * J - G * L;
						_c[26] = G * K - H * J;
						gl.uniform4fv(shader._c, _c);
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
						var shader = global.shaders.m_lambert1;
						gl.uniform4fv(shader.s_o, global.scaleOffset0);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 12);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 0);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);
					},
					b: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_lambert1;
						gl.uniform4fv(shader.s_o, global.scaleOffset1);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 396);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 384);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 138, gl.UNSIGNED_SHORT, 72);
					},
					c: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_lambert1;
						gl.uniform4fv(shader.s_o, global.scaleOffset2);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 1620);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 1608);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 138, gl.UNSIGNED_SHORT, 348);
					},
					d: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_lambert1;
						gl.uniform4fv(shader.s_o, global.scaleOffset3);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 2844);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 2832);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 624);
					},
					e: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_lambert1;
						gl.uniform4fv(shader.s_o, global.scaleOffset4);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 3228);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 3216);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 138, gl.UNSIGNED_SHORT, 696);
					},
					f: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_lambert1;
						gl.uniform4fv(shader.s_o, global.scaleOffset5);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 4452);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 4440);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 138, gl.UNSIGNED_SHORT, 972);
					},
					g: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_lambert1;
						gl.uniform4fv(shader.s_o, global.scaleOffset6);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 5652);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 5640);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 138, gl.UNSIGNED_SHORT, 1248);
					},
					h: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_lambert1;
						gl.uniform4fv(shader.s_o, global.scaleOffset7);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 6876);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 6864);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 138, gl.UNSIGNED_SHORT, 1524);
					},
					i: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_lambert1;
						gl.uniform4fv(shader.s_o, global.scaleOffset8);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 8100);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 8088);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 138, gl.UNSIGNED_SHORT, 1800);
					},
					j: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_lambert1;
						gl.uniform4fv(shader.s_o, global.scaleOffset9);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 9324);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 9312);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 138, gl.UNSIGNED_SHORT, 2076);
					},
					k: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_lambert1;
						gl.uniform4fv(shader.s_o, global.scaleOffset10);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 10548);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 10536);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 138, gl.UNSIGNED_SHORT, 2352);
					},
					l: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_lambert1;
						gl.uniform4fv(shader.s_o, global.scaleOffset11);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 11772);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 11760);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 2628);
					},
					m: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_lambert1;
						gl.uniform4fv(shader.s_o, global.scaleOffset12);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 12156);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 12144);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 2700);
					},
					n: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_lambert1;
						gl.uniform4fv(shader.s_o, global.scaleOffset13);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 12540);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 12528);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 138, gl.UNSIGNED_SHORT, 2772);
					},
					o: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_lambert1;
						gl.uniform4fv(shader.s_o, global.scaleOffset14);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 13764);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 13752);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 3048);
					}
				},

				createInstance: function(global, renderer)
				{
					var instance = 
					{
						global: global,
						renderer: renderer,
						ids: new Uint32Array(15),
						fstate: new Float32Array(1), 

						shaders:
						{
							m_lambert1:
							{
								uniform: {_b: new Float32Array(16)},
								transfer: {_a: new Float32Array(16)},
							}
						},
						itransforms: new Int32Array(15), ftransforms: new Float32Array(240), 
						fboundingBoxes: new Float32Array(90), 
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
						var buffers = global.buffers;
						var itransforms = instance.itransforms;
						var ftransforms = instance.ftransforms;
						var fboundingBoxes = instance.fboundingBoxes;

						ftransforms[176] = 1.0;
						ftransforms[177] = 0.0;
						ftransforms[178] = 0.0;
						ftransforms[179] = 0.0;
						ftransforms[180] = 0.0;
						ftransforms[181] = 1.0;
						ftransforms[182] = 0.0;
						ftransforms[183] = 0.0;
						ftransforms[184] = 0.0;
						ftransforms[185] = 0.0;
						ftransforms[186] = 1.0;
						ftransforms[187] = 0.0;
						ftransforms[188] = num;
						ftransforms[189] = 0.0;
						ftransforms[190] = 0.0;
						ftransforms[191] = 1.0;
						itransforms[11] = 1;
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
						ftransforms[12] = num;
						ftransforms[13] = 0.0;
						ftransforms[14] = 0.0;
						ftransforms[15] = 1.0;
						itransforms[0] = 1;
						ftransforms[16] = 1.0;
						ftransforms[17] = 0.0;
						ftransforms[18] = 0.0;
						ftransforms[19] = 0.0;
						ftransforms[20] = 0.0;
						ftransforms[21] = 1.0;
						ftransforms[22] = 0.0;
						ftransforms[23] = 0.0;
						ftransforms[24] = 0.0;
						ftransforms[25] = .00;
						ftransforms[26] = 1.0;
						ftransforms[27] = 0.0;
						ftransforms[28] = num;
						ftransforms[29] = 0.0;
						ftransforms[30] = 0.0;
						ftransforms[31] = 1.0;
						itransforms[1] = 1;
						ftransforms[32] = 1.0;
						ftransforms[33] = 0.0;
						ftransforms[34] = 0.0;
						ftransforms[35] = 0.0;
						ftransforms[36] = 0.0;
						ftransforms[37] = 1.0;
						ftransforms[38] = 0.0;
						ftransforms[39] = 0.0;
						ftransforms[40] = 0.0;
						ftransforms[41] = 0.0;
						ftransforms[42] = 1.0;
						ftransforms[43] = 0.0;
						ftransforms[44] = num;
						ftransforms[45] = 0.0;
						ftransforms[46] = 0.0;
						ftransforms[47] = 1.0;
						itransforms[2] = 1;
						ftransforms[48] = 1.0;
						ftransforms[49] = 0.0;
						ftransforms[50] = 0.0;
						ftransforms[51] = 0.0;
						ftransforms[52] = 0.0;
						ftransforms[53] = 1.0;
						ftransforms[54] = 0.0;
						ftransforms[55] = 0.0;
						ftransforms[56] = 0.0;
						ftransforms[57] = 0.0;
						ftransforms[58] = 1.0;
						ftransforms[59] = 0.0;
						ftransforms[60] = num;
						ftransforms[61] = 0.0;
						ftransforms[62] = 0.0;
						ftransforms[63] = 1.0;
						itransforms[3] = 1;
						ftransforms[64] = 1.0;
						ftransforms[65] = 0.0;
						ftransforms[66] = 0.0;
						ftransforms[67] = 0.0;
						ftransforms[68] = 0.0;
						ftransforms[69] = 1.0;
						ftransforms[70] = 0.0;
						ftransforms[71] = 0.0;
						ftransforms[72] = 0.0;
						ftransforms[73] = 0.0;
						ftransforms[74] = 1.0;
						ftransforms[75] = 0.0;
						ftransforms[76] = num;
						ftransforms[77] = 0.0;
						ftransforms[78] = 0.0;
						ftransforms[79] = 1.0;
						itransforms[4] = 1;
						ftransforms[80] = 1.0;
						ftransforms[81] = 0.0;
						ftransforms[82] = 0.0;
						ftransforms[83] = 0.0;
						ftransforms[84] = 0.0;
						ftransforms[85] = 1.0;
						ftransforms[86] = 0.0;
						ftransforms[87] = 0.0;
						ftransforms[88] = 0.0;
						ftransforms[89] = 0.0;
						ftransforms[90] = 1.0;
						ftransforms[91] = 0.0;
						ftransforms[92] = num;
						ftransforms[93] = 0.0;
						ftransforms[94] = 0.0;
						ftransforms[95] = 1.0;
						itransforms[5] = 1;
						ftransforms[96] = 1.0;
						ftransforms[97] = 0.0;
						ftransforms[98] = 0.0;
						ftransforms[99] = 0.0;
						ftransforms[100] = 0.0;
						ftransforms[101] = 1.0;
						ftransforms[102] = 0.0;
						ftransforms[103] = 0.0;
						ftransforms[104] = 0.0;
						ftransforms[105] = 0.0;
						ftransforms[106] = 1.0;
						ftransforms[107] = 0.0;
						ftransforms[108] = num;
						ftransforms[109] = 0.0;
						ftransforms[110] = 0.0;
						ftransforms[111] = 1.0;
						itransforms[6] = 1;
						ftransforms[112] = 1.0;
						ftransforms[113] = 0.0;
						ftransforms[114] = 0.0;
						ftransforms[115] = 0.0;
						ftransforms[116] = 0.0;
						ftransforms[117] = 1.0;
						ftransforms[118] = 0.0;
						ftransforms[119] = 0.0;
						ftransforms[120] = 0.0;
						ftransforms[121] = 0.0;
						ftransforms[122] = 1.0;
						ftransforms[123] = 0.0;
						ftransforms[124] = num;
						ftransforms[125] = 0.0;
						ftransforms[126] = 0.0;
						ftransforms[127] = 1.0;
						itransforms[7] = 1;
						ftransforms[128] = 1.0;
						ftransforms[129] = 0.0;
						ftransforms[130] = 0.0;
						ftransforms[131] = 0.0;
						ftransforms[132] = 0.0;
						ftransforms[133] = 1.0;
						ftransforms[134] = 0.0;
						ftransforms[135] = 0.0;
						ftransforms[136] = 0.0;
						ftransforms[137] = 0.0;
						ftransforms[138] = 1.0;
						ftransforms[139] = 0.0;
						ftransforms[140] = num;
						ftransforms[141] = 0.0;
						ftransforms[142] = 0.0;
						ftransforms[143] = 1.0;
						itransforms[8] = 1;
						ftransforms[160] = 1.0;
						ftransforms[161] = 0.0;
						ftransforms[162] = 0.0;
						ftransforms[163] = 0.0;
						ftransforms[164] = 0.0;
						ftransforms[165] = 1.0;
						ftransforms[166] = 0.0;
						ftransforms[167] = 0.0;
						ftransforms[168] = 0.0;
						ftransforms[169] = 0.0;
						ftransforms[170] = 1.0;
						ftransforms[171] = 0.0;
						ftransforms[172] = num;
						ftransforms[173] = 0.0;
						ftransforms[174] = 0.0;
						ftransforms[175] = 1.0;
						itransforms[10] = 1;
						ftransforms[144] = 1.0;
						ftransforms[145] = 0.0;
						ftransforms[146] = 0.0;
						ftransforms[147] = 0.0;
						ftransforms[148] = 0.0;
						ftransforms[149] = 1.0;
						ftransforms[150] = 0.0;
						ftransforms[151] = 0.0;
						ftransforms[152] = 0.0;
						ftransforms[153] = 0.0;
						ftransforms[154] = 1.0;
						ftransforms[155] = 0.0;
						ftransforms[156] = num;
						ftransforms[157] = 0.0;
						ftransforms[158] = 0.0;
						ftransforms[159] = 1.0;
						itransforms[9] = 1;
						ftransforms[208] = 1.0;
						ftransforms[209] = 0.0;
						ftransforms[210] = 0.0;
						ftransforms[211] = 0.0;
						ftransforms[212] = 0.0;
						ftransforms[213] = 1.0;
						ftransforms[214] = 0.0;
						ftransforms[215] = 0.0;
						ftransforms[216] = 0.0;
						ftransforms[217] = 0.0;
						ftransforms[218] = 1.0;
						ftransforms[219] = 0.0;
						ftransforms[220] = num;
						ftransforms[221] = 0.0;
						ftransforms[222] = 0.0;
						ftransforms[223] = 1.0;
						itransforms[13] = 1;
						ftransforms[224] = 1.0;
						ftransforms[225] = 0.0;
						ftransforms[226] = 0.0;
						ftransforms[227] = 0.0;
						ftransforms[228] = 0.0;
						ftransforms[229] = 1.0;
						ftransforms[230] = 0.0;
						ftransforms[231] = 0.0;
						ftransforms[232] = 0.0;
						ftransforms[233] = 0.0;
						ftransforms[234] = 1.0;
						ftransforms[235] = 0.0;
						ftransforms[236] = num;
						ftransforms[237] = 0.0;
						ftransforms[238] = 0.0;
						ftransforms[239] = 1.0;
						itransforms[14] = 1;
						ftransforms[192] = 1.0;
						ftransforms[193] = 0.0;
						ftransforms[194] = 0.0;
						ftransforms[195] = 0.0;
						ftransforms[196] = 0.0;
						ftransforms[197] = 1.0;
						ftransforms[198] = 0.0;
						ftransforms[199] = 0.0;
						ftransforms[200] = 0.0;
						ftransforms[201] = 0.0;
						ftransforms[202] = 1.0;
						ftransforms[203] = 0.0;
						ftransforms[204] = num;
						ftransforms[205] = 0.0;
						ftransforms[206] = 0.0;
						ftransforms[207] = 1.0;
						itransforms[12] = 1;
						fboundingBoxes[0] = 0.1779;
						fboundingBoxes[1] = 0.98425;
						fboundingBoxes[2] = -0.3329;
						fboundingBoxes[3] = 0.0984;
						fboundingBoxes[4] = 0.98425;
						fboundingBoxes[5] = 0.0984;
						fboundingBoxes[6] = -4.278;
						fboundingBoxes[7] = 3.7201;
						fboundingBoxes[8] = -0.366349;
						fboundingBoxes[9] = 4.428;
						fboundingBoxes[10] = 1.2058;
						fboundingBoxes[11] = 3.37275;
						fboundingBoxes[12] = 4.4907;
						fboundingBoxes[13] = 3.89415;
						fboundingBoxes[14] = -0.366349;
						fboundingBoxes[15] = 4.2144;
						fboundingBoxes[16] = 1.34725;
						fboundingBoxes[17] = 3.37275;
						fboundingBoxes[18] = 0.18715;
						fboundingBoxes[19] = 5.419;
						fboundingBoxes[20] = 4.08525;
						fboundingBoxes[21] = 3.24305;
						fboundingBoxes[22] = 1.1594;
						fboundingBoxes[23] = 4.25765;
						fboundingBoxes[24] = 0.17355;
						fboundingBoxes[25] = 5.8383;
						fboundingBoxes[26] = -4.3371;
						fboundingBoxes[27] = 3.24305;
						fboundingBoxes[28] = 1.5451;
						fboundingBoxes[29] = 4.0039;
						fboundingBoxes[30] = -1.25895;
						fboundingBoxes[31] = 9.95605;
						fboundingBoxes[32] = 0.2318;
						fboundingBoxes[33] = 1.42765;
						fboundingBoxes[34] = 0.64595;
						fboundingBoxes[35] = 1.3015;
						fboundingBoxes[36] = 1.6298;
						fboundingBoxes[37] = 9.92285;
						fboundingBoxes[38] = 0.1858;
						fboundingBoxes[39] = 1.439;
						fboundingBoxes[40] = 0.61665;
						fboundingBoxes[41] = 1.2972;
						fboundingBoxes[42] = 0.1815;
						fboundingBoxes[43] = 8.73985;
						fboundingBoxes[44] = 2.79915;
						fboundingBoxes[45] = 2.2831;
						fboundingBoxes[46] = 0.82565;
						fboundingBoxes[47] = 2.79605;
						fboundingBoxes[48] = 0.1952;
						fboundingBoxes[49] = 9.0078;
						fboundingBoxes[50] = -2.7967;
						fboundingBoxes[51] = 2.2831;
						fboundingBoxes[52] = 1.0684;
						fboundingBoxes[53] = 2.7334;
						fboundingBoxes[54] = -2.8366;
						fboundingBoxes[55] = 7.33925;
						fboundingBoxes[56] = -0.1093;
						fboundingBoxes[57] = 2.9205;
						fboundingBoxes[58] = 1.05575;
						fboundingBoxes[59] = 2.5944;
						fboundingBoxes[60] = 3.1924;
						fboundingBoxes[61] = 7.33725;
						fboundingBoxes[62] = -0.09375;
						fboundingBoxes[63] = 2.9205;
						fboundingBoxes[64] = 1.05575;
						fboundingBoxes[65] = 2.59445;
						fboundingBoxes[66] = 0.1779;
						fboundingBoxes[67] = 8.77395;
						fboundingBoxes[68] = 0.05255;
						fboundingBoxes[69] = 0.0984;
						fboundingBoxes[70] = 0.98865;
						fboundingBoxes[71] = 0.22605;
						fboundingBoxes[72] = 0.1779;
						fboundingBoxes[73] = 6.83355;
						fboundingBoxes[74] = -0.07595;
						fboundingBoxes[75] = 0.0984;
						fboundingBoxes[76] = 0.98425;
						fboundingBoxes[77] = 0.09845;
						fboundingBoxes[78] = 0.1779;
						fboundingBoxes[79] = 4.89315;
						fboundingBoxes[80] = -0.20445;
						fboundingBoxes[81] = 0.0984;
						fboundingBoxes[82] = 0.98865;
						fboundingBoxes[83] = 0.22605;
						fboundingBoxes[84] = 0.1779;
						fboundingBoxes[85] = 2.95275;
						fboundingBoxes[86] = -0.3329;
						fboundingBoxes[87] = 0.0984;
						fboundingBoxes[88] = 0.98425;
						fboundingBoxes[89] = 0.0984;
					};

					instance.render = function(viewMatrix, projectionMatrix, layerName, renderQueues)
					{
						instance.renderSequence = ++global.sequence;
						var viewProjectionMatrix = instance.viewProjectionMatrix;
						engine.matrix4x4Mul(projectionMatrix, viewMatrix, viewProjectionMatrix);
						var itransforms = instance.itransforms;
						var ftransforms = instance.ftransforms;
						var fboundingBoxes = instance.fboundingBoxes;

						// mesh, shader 'lambert1'
						var s_ = instance.shaders.m_lambert1;
						var uniform = s_.uniform;
						var _b = uniform._b;
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
						s_.renderJobs = null;

						var jobIt = renderQueues.begin;
						var jobEnd = renderQueues.end;
						if (itransforms[0])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_lambert1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_lambert1_5;
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
						}
						if (itransforms[1])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_lambert1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_lambert1_5;
								var data = renderJob.data;
								data[0] = ftransforms[16];
								data[1] = ftransforms[17];
								data[2] = ftransforms[18];
								data[3] = ftransforms[19];
								data[4] = ftransforms[20];
								data[5] = ftransforms[21];
								data[6] = ftransforms[22];
								data[7] = ftransforms[23];
								data[8] = ftransforms[24];
								data[9] = ftransforms[25];
								data[10] = ftransforms[26];
								data[11] = ftransforms[27];
								data[12] = ftransforms[28];
								data[13] = ftransforms[29];
								data[14] = ftransforms[30];
								data[15] = ftransforms[31];
								renderJob.draw = global.draw.b;
								renderJob.instance = instance;
							}
						}
						if (itransforms[2])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_lambert1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_lambert1_5;
								var data = renderJob.data;
								data[0] = ftransforms[32];
								data[1] = ftransforms[33];
								data[2] = ftransforms[34];
								data[3] = ftransforms[35];
								data[4] = ftransforms[36];
								data[5] = ftransforms[37];
								data[6] = ftransforms[38];
								data[7] = ftransforms[39];
								data[8] = ftransforms[40];
								data[9] = ftransforms[41];
								data[10] = ftransforms[42];
								data[11] = ftransforms[43];
								data[12] = ftransforms[44];
								data[13] = ftransforms[45];
								data[14] = ftransforms[46];
								data[15] = ftransforms[47];
								renderJob.draw = global.draw.c;
								renderJob.instance = instance;
							}
						}
						if (itransforms[3])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_lambert1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_lambert1_5;
								var data = renderJob.data;
								data[0] = ftransforms[48];
								data[1] = ftransforms[49];
								data[2] = ftransforms[50];
								data[3] = ftransforms[51];
								data[4] = ftransforms[52];
								data[5] = ftransforms[53];
								data[6] = ftransforms[54];
								data[7] = ftransforms[55];
								data[8] = ftransforms[56];
								data[9] = ftransforms[57];
								data[10] = ftransforms[58];
								data[11] = ftransforms[59];
								data[12] = ftransforms[60];
								data[13] = ftransforms[61];
								data[14] = ftransforms[62];
								data[15] = ftransforms[63];
								renderJob.draw = global.draw.e;
								renderJob.instance = instance;
							}
						}
						if (itransforms[4])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_lambert1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_lambert1_5;
								var data = renderJob.data;
								data[0] = ftransforms[64];
								data[1] = ftransforms[65];
								data[2] = ftransforms[66];
								data[3] = ftransforms[67];
								data[4] = ftransforms[68];
								data[5] = ftransforms[69];
								data[6] = ftransforms[70];
								data[7] = ftransforms[71];
								data[8] = ftransforms[72];
								data[9] = ftransforms[73];
								data[10] = ftransforms[74];
								data[11] = ftransforms[75];
								data[12] = ftransforms[76];
								data[13] = ftransforms[77];
								data[14] = ftransforms[78];
								data[15] = ftransforms[79];
								renderJob.draw = global.draw.f;
								renderJob.instance = instance;
							}
						}
						if (itransforms[5])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_lambert1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_lambert1_5;
								var data = renderJob.data;
								data[0] = ftransforms[80];
								data[1] = ftransforms[81];
								data[2] = ftransforms[82];
								data[3] = ftransforms[83];
								data[4] = ftransforms[84];
								data[5] = ftransforms[85];
								data[6] = ftransforms[86];
								data[7] = ftransforms[87];
								data[8] = ftransforms[88];
								data[9] = ftransforms[89];
								data[10] = ftransforms[90];
								data[11] = ftransforms[91];
								data[12] = ftransforms[92];
								data[13] = ftransforms[93];
								data[14] = ftransforms[94];
								data[15] = ftransforms[95];
								renderJob.draw = global.draw.h;
								renderJob.instance = instance;
							}
						}
						if (itransforms[6])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_lambert1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_lambert1_5;
								var data = renderJob.data;
								data[0] = ftransforms[96];
								data[1] = ftransforms[97];
								data[2] = ftransforms[98];
								data[3] = ftransforms[99];
								data[4] = ftransforms[100];
								data[5] = ftransforms[101];
								data[6] = ftransforms[102];
								data[7] = ftransforms[103];
								data[8] = ftransforms[104];
								data[9] = ftransforms[105];
								data[10] = ftransforms[106];
								data[11] = ftransforms[107];
								data[12] = ftransforms[108];
								data[13] = ftransforms[109];
								data[14] = ftransforms[110];
								data[15] = ftransforms[111];
								renderJob.draw = global.draw.g;
								renderJob.instance = instance;
							}
						}
						if (itransforms[7])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_lambert1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_lambert1_5;
								var data = renderJob.data;
								data[0] = ftransforms[112];
								data[1] = ftransforms[113];
								data[2] = ftransforms[114];
								data[3] = ftransforms[115];
								data[4] = ftransforms[116];
								data[5] = ftransforms[117];
								data[6] = ftransforms[118];
								data[7] = ftransforms[119];
								data[8] = ftransforms[120];
								data[9] = ftransforms[121];
								data[10] = ftransforms[122];
								data[11] = ftransforms[123];
								data[12] = ftransforms[124];
								data[13] = ftransforms[125];
								data[14] = ftransforms[126];
								data[15] = ftransforms[127];
								renderJob.draw = global.draw.i;
								renderJob.instance = instance;
							}
						}
						if (itransforms[8])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_lambert1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_lambert1_5;
								var data = renderJob.data;
								data[0] = ftransforms[128];
								data[1] = ftransforms[129];
								data[2] = ftransforms[130];
								data[3] = ftransforms[131];
								data[4] = ftransforms[132];
								data[5] = ftransforms[133];
								data[6] = ftransforms[134];
								data[7] = ftransforms[135];
								data[8] = ftransforms[136];
								data[9] = ftransforms[137];
								data[10] = ftransforms[138];
								data[11] = ftransforms[139];
								data[12] = ftransforms[140];
								data[13] = ftransforms[141];
								data[14] = ftransforms[142];
								data[15] = ftransforms[143];
								renderJob.draw = global.draw.k;
								renderJob.instance = instance;
							}
						}
						if (itransforms[9])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_lambert1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_lambert1_5;
								var data = renderJob.data;
								data[0] = ftransforms[144];
								data[1] = ftransforms[145];
								data[2] = ftransforms[146];
								data[3] = ftransforms[147];
								data[4] = ftransforms[148];
								data[5] = ftransforms[149];
								data[6] = ftransforms[150];
								data[7] = ftransforms[151];
								data[8] = ftransforms[152];
								data[9] = ftransforms[153];
								data[10] = ftransforms[154];
								data[11] = ftransforms[155];
								data[12] = ftransforms[156];
								data[13] = ftransforms[157];
								data[14] = ftransforms[158];
								data[15] = ftransforms[159];
								renderJob.draw = global.draw.j;
								renderJob.instance = instance;
							}
						}
						if (itransforms[10])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_lambert1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_lambert1_5;
								var data = renderJob.data;
								data[0] = ftransforms[160];
								data[1] = ftransforms[161];
								data[2] = ftransforms[162];
								data[3] = ftransforms[163];
								data[4] = ftransforms[164];
								data[5] = ftransforms[165];
								data[6] = ftransforms[166];
								data[7] = ftransforms[167];
								data[8] = ftransforms[168];
								data[9] = ftransforms[169];
								data[10] = ftransforms[170];
								data[11] = ftransforms[171];
								data[12] = ftransforms[172];
								data[13] = ftransforms[173];
								data[14] = ftransforms[174];
								data[15] = ftransforms[175];
								renderJob.draw = global.draw.n;
								renderJob.instance = instance;
							}
						}
						if (itransforms[11])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_lambert1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_lambert1_5;
								var data = renderJob.data;
								data[0] = ftransforms[176];
								data[1] = ftransforms[177];
								data[2] = ftransforms[178];
								data[3] = ftransforms[179];
								data[4] = ftransforms[180];
								data[5] = ftransforms[181];
								data[6] = ftransforms[182];
								data[7] = ftransforms[183];
								data[8] = ftransforms[184];
								data[9] = ftransforms[185];
								data[10] = ftransforms[186];
								data[11] = ftransforms[187];
								data[12] = ftransforms[188];
								data[13] = ftransforms[189];
								data[14] = ftransforms[190];
								data[15] = ftransforms[191];
								renderJob.draw = global.draw.m;
								renderJob.instance = instance;
							}
						}
						if (itransforms[12])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_lambert1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_lambert1_5;
								var data = renderJob.data;
								data[0] = ftransforms[192];
								data[1] = ftransforms[193];
								data[2] = ftransforms[194];
								data[3] = ftransforms[195];
								data[4] = ftransforms[196];
								data[5] = ftransforms[197];
								data[6] = ftransforms[198];
								data[7] = ftransforms[199];
								data[8] = ftransforms[200];
								data[9] = ftransforms[201];
								data[10] = ftransforms[202];
								data[11] = ftransforms[203];
								data[12] = ftransforms[204];
								data[13] = ftransforms[205];
								data[14] = ftransforms[206];
								data[15] = ftransforms[207];
								renderJob.draw = global.draw.l;
								renderJob.instance = instance;
							}
						}
						if (itransforms[13])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_lambert1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_lambert1_5;
								var data = renderJob.data;
								data[0] = ftransforms[208];
								data[1] = ftransforms[209];
								data[2] = ftransforms[210];
								data[3] = ftransforms[211];
								data[4] = ftransforms[212];
								data[5] = ftransforms[213];
								data[6] = ftransforms[214];
								data[7] = ftransforms[215];
								data[8] = ftransforms[216];
								data[9] = ftransforms[217];
								data[10] = ftransforms[218];
								data[11] = ftransforms[219];
								data[12] = ftransforms[220];
								data[13] = ftransforms[221];
								data[14] = ftransforms[222];
								data[15] = ftransforms[223];
								renderJob.draw = global.draw.o;
								renderJob.instance = instance;
							}
						}
						if (itransforms[14])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_lambert1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_lambert1_5;
								var data = renderJob.data;
								data[0] = ftransforms[224];
								data[1] = ftransforms[225];
								data[2] = ftransforms[226];
								data[3] = ftransforms[227];
								data[4] = ftransforms[228];
								data[5] = ftransforms[229];
								data[6] = ftransforms[230];
								data[7] = ftransforms[231];
								data[8] = ftransforms[232];
								data[9] = ftransforms[233];
								data[10] = ftransforms[234];
								data[11] = ftransforms[235];
								data[12] = ftransforms[236];
								data[13] = ftransforms[237];
								data[14] = ftransforms[238];
								data[15] = ftransforms[239];
								renderJob.draw = global.draw.a;
								renderJob.instance = instance;
							}
						}
						renderQueues.begin = jobIt;
						var shader = global.shaders.m_lambert1;
						var shader = global.shaders.m_lambert1;
						gl.useProgram(shader.program);
						var uniform = instance.shaders.m_lambert1.uniform;
						gl.uniform4fv(shader._b, uniform._b);
						gl.enable(gl.CULL_FACE);
						var current = instance.shaders.m_lambert1.renderJobs;
						while (current)
						{
							current.render(current);
							current = current.next;
						}
					};

					var fstate = instance.fstate;

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
				],

				objects:
				{
					"d_model:coleus_hybrid_leaf_001Shape[0]": 10,
					"d_model:coleus_hybrid_leaf_002Shape[0]": 9,
					"d_model:coleus_hybrid_leaf_003Shape[0]": 8,
					"d_model:coleus_hybrid_leaf_004Shape[0]": 7,
					"d_model:coleus_hybrid_leaf_005Shape[0]": 6,
					"d_model:coleus_hybrid_leaf_006Shape[0]": 5,
					"d_model:coleus_hybrid_leaf_007Shape[0]": 4,
					"d_model:coleus_hybrid_leaf_008Shape[0]": 3,
					"d_model:coleus_hybrid_leaf_009Shape[0]": 2,
					"d_model:coleus_hybrid_leaf_010Shape[0]": 1,
					"d_model:coleus_stem_1_001Shape[0]": 14,
					"d_model:coleus_stem_1_002Shape[0]": 13,
					"d_model:coleus_stem_1_003Shape[0]": 12,
					"d_model:coleus_stem_1_004Shape[0]": 11,
					"d_model:coleus_stem_1_005Shape[0]": 0
				}

			}

		},

		numFiles: 1,
		check: function (){
			return 0;
		}
	};
	return s;
}
(inka3dEngine);
