# Tarefas — Spec 044 (Combinar encontro)

Responsável: **Micael Cardoso Reis** (`pessoa:micael`). Issue #188.

- [ ] T001 ADR 0035 (encontro como entidade própria) e índice de ADRs.
- [ ] T002 `entities/meeting.ts` e `validators/meetingValidator.ts` com testes (RN-02, RN-03).
- [ ] T003 `iMeetingDataSource.ts` e `memoryMeetingDataSource.ts` com testes.
- [ ] T004 `meetingUseCases.ts` com testes de RN-01, RN-04 a RN-08.
- [ ] T005 Migração `202610220001_encontros.sql` com RLS e gatilho; casos no `npm run test:sql`.
- [ ] T006 `supabaseMeetingDataSource.ts` com testes do adaptador.
- [ ] T007 Composição em `src/di/container.ts`.
- [ ] T008 `useMeetingViewModel` com testes.
- [ ] T009 Tela `scheduleMeeting.tsx` (`06.04`/`06.13`), rota e `_redirects`, com testes.
- [ ] T010 Cartão do encontro e diálogo de cancelamento em `requestDetail.tsx` (`06.05`, `06.11`,
      `06.12`, `06.14`), com testes.
- [ ] T011 `npm run validate`, conferência visual via CDP e `docs/estado.md` atualizado.
- [ ] T012 Aplicar a migração no Supabase remoto (exige autorização e credencial).
